---
layout: page
title: "街旁档案 (Jiepang Profile)"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
published: false
---

[街旁档案 (Jiepang Profile)](http://jieprofile.com/) is a web application that analyzes and visualizes the data of individual Jiepang users.

<p style="text-align:center"><img src="/images/projects/jieprofile/splash.png" width="418" class="no-shadow" /></p>

I created this application during my internship at Jiepang in summer 2011, as my first step into the world of startups and web technologies. This was the very first time that I made something for the mass users, and it was amazing. I was truly fascinated by how rapidly products are shaped and shipped at a startup.

I was fortunate to have gone through the entire process of creating this software -- I was at once the manager, product designer, interaction designer and developer of this mini project. The stunning visual design was created by our talented designer [Abiling](http://weibo.com/abiling). I would also like to thank Yuancheng, Zhengwei, Izzy, Zakk, 帅哥, 芋头, Maoz, and everyone at Jiepang, for your extraordinary support and help!

Jiepang Profile was featured on [36kr](http://www.36kr.com/p/42609.html), China's leading tech blog.

<!-- TODO scrshot -->

Jiepang Profile didn't come so smoothly -- the initial design was broken into five pages, each presenting a section in the analysis. However this soon proved unfeasible. Since the data is processed on the fly, it takes minutes to generate the most complicated section of a report, which is way too long for a page load. Finally I decided to fit all the five sections into one web page -- all the sections are empty at first, and contents are filled in using AJAX and JavaScript DOM manipulation as soon as the data is ready for each section. So I was actually practicing the Single Page Application pattern without knowing the term or clearly understanding the concept -- I just thought AJAX was a good idea.
