---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
author: 
read_year: '{{ now.Format "2006" }}'
book_ref_url: 
recommendation: '3'
url: /{{ .Section }}/{{ .Name }}/
---

