$(function() {
	$('.masterTooltip').hover( function() {
	  var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
	  $('<p class="tooltip"></p>')
      .text(title)
      .appendTo('body')
      .fadeIn('slow');
	}, function() {
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
	}).mousemove( function(e) {
	    var mousex = e.pageX + 5; // Get X coordinates
	    var mousey = e.pageY + 5; // Get Y coordinates
	  $('.tooltip').css({ top: mousey, left: mousex });
	});
});

// Dark Mode Toggle Functionality
function initDarkMode() {
    const toggleButton = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const html = document.documentElement;
    
    if (!toggleButton || !toggleIcon) {
        console.log('Dark mode toggle elements not found, retrying...');
        return false;
    }
    
    console.log('Dark mode toggle initialized');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
            toggleIcon.textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            toggleIcon.textContent = '🌙';
        }
        console.log('Applied theme:', theme);
    }
    
    // Initialize with saved theme (sync with what was set in head)
    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        toggleIcon.textContent = '☀️';
    } else {
        applyTheme(savedTheme);
    }
    
    // Toggle theme on button click
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Dark mode toggle clicked');
        
        const currentTheme = html.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Switch to light mode
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if no saved preference exists
        if (!localStorage.getItem('theme')) {
            applyTheme(mediaQuery.matches ? 'dark' : 'light');
        }
        
        // Listen for changes in system preference
        mediaQuery.addEventListener('change', function(e) {
            // Only apply if no manual preference is saved
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    return true;
}

// Multiple initialization strategies to ensure it works
$(document).ready(function() {
    console.log('jQuery ready, initializing dark mode');
    
    // Try to initialize immediately
    if (!initDarkMode()) {
        // If elements not found, try again after a short delay
        setTimeout(function() {
            console.log('Retrying dark mode initialization');
            initDarkMode();
        }, 100);
    }
});