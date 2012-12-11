---
layout: page
title: "Outliner"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
---

Outliner is a Chrome extension that generates a table of contents of a web page by extracting the headings in the DOM. [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/outliner/kdabjjgkcfjdlbpneackoihbkdpdmodp), or [fork the GitHub repo](https://github.com/scottcheng/outliner).

{% img /images/projects/outliner/promo.png %}

When I was reading a long Wikipedia article with thirty headings, I soon lost the big picture of what the article presented, and thought it would be great if I had an "outline" that stays on the left of the screen. So I made Outliner.

[{% img /images/projects/outliner/scrshot0.png %}](/images/projects/outliner/scrshot0.png)

[{% img /images/projects/outliner/scrshot1.png %}](/images/projects/outliner/scrshot1.png)

<script src='/javascripts/libs/jquery.min.js'></script>
<script>
$.noConflict();
jQuery(function($) {
  $('a:has(img)').css('border-bottom', 'none');
});
</script>
