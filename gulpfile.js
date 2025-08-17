const gulp = require("gulp");
const cp = require("child_process");
const log = require("fancy-log");
const PluginError = require("plugin-error");
const postcss = require("gulp-postcss");
const cssImport = require("postcss-import");
const postcssPresetEnv = require("postcss-preset-env");
const BrowserSync = require("browser-sync");
const webpack = require("webpack");
const webpackConfig = require("./webpack.conf.js");
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const inject = require("gulp-inject");
const fs = require("fs");
const path = require("path");
const cssnano = require("cssnano");

const browserSync = BrowserSync.create();
const bundledHugoBin = `./bin/hugo.${process.platform === "win32" ? "exe" : process.platform}`;
const defaultArgs = ["-d", "../dist", "-s", "site"];

if (process.env.DEBUG) {
  defaultArgs.unshift("--debug");
}

function resolveHugoCommand() {
  const envBin = process.env.HUGO_BIN;
  if (envBin && fs.existsSync(envBin)) {
    log(`[hugo] using HUGO_BIN: ${envBin}`);
    return envBin;
  }
  try {
    const probe = cp.spawnSync("hugo", ["version"], { stdio: "ignore" });
    if (probe.status === 0) {
      log("[hugo] using system-installed hugo");
      return "hugo";
    }
  } catch (e) {
    // ignore
  }
  log(`[hugo] using bundled binary: ${bundledHugoBin}`);
  return bundledHugoBin;
}

function buildSite(done, options) {
  const extraArgs = process.env.HUGO_ARGS ? String(process.env.HUGO_ARGS).split(/\s+/).filter(Boolean) : [];
  const args = (options ? defaultArgs.concat(options) : defaultArgs).concat(extraArgs);
  const hugoCmd = resolveHugoCommand();
  return cp.spawn(hugoCmd, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      done();
    } else {
      browserSync.notify("Hugo build failed :(");
      done(new Error("Hugo build failed"));
    }
  });
}

function taskHugo(done) {
  return buildSite(done);
}

function taskHugoPreview(done) {
  return buildSite(done, ["--buildDrafts", "--buildFuture"]);
}

function taskCss() {
  return gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport({from: "./src/css/main.css"}),
      postcssPresetEnv(),
      cssnano(),
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function taskJs(done) {
  const myConfig = Object.assign({}, webpackConfig);
  webpack(myConfig, (err, stats) => {
    if (err) {
      done(new PluginError("webpack", err));
      return;
    }
    log("[webpack]", stats.toString({ colors: true, progress: true }));
    browserSync.reload();
    done();
  });
}

function taskSvg() {
  const destPartial = path.join("site", "layouts", "partials", "svg.html");
  if (!fs.existsSync(destPartial)) {
    // Skip silently if project doesn't use SVG sprite partial
    return Promise.resolve();
  }
  const svgs = gulp
    .src("site/static/img/icons-*.svg", { allowEmpty: true })
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src(destPartial)
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest(path.dirname(destPartial)));
}

function taskServer() {
  browserSync.init({
    server: { baseDir: "./dist" }
  });
  gulp.watch("./src/js/**/*.js", gulp.series(taskJs));
  gulp.watch("./src/css/**/*.css", gulp.series(taskCss));
  gulp.watch("./site/static/img/icons-*.svg", gulp.series(taskSvg));
  gulp.watch("./site/**/*", gulp.series(taskHugo));
}

const build = gulp.series(gulp.parallel(taskCss, taskJs, taskSvg), taskHugo);
const buildPreview = gulp.series(gulp.parallel(taskCss, taskJs, taskSvg), taskHugoPreview);

gulp.task("hugo", taskHugo);
gulp.task("hugo-preview", taskHugoPreview);
gulp.task("css", taskCss);
gulp.task("js", taskJs);
gulp.task("svg", taskSvg);
gulp.task("build", build);
gulp.task("build-preview", buildPreview);
gulp.task("server", gulp.series(build, taskServer));


