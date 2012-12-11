---
layout: page
title: "Talking Gmail"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
---

Talking Gmail is a Chrome extension that reads your Gmail messages for you. [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/talking-gmail/cgbcmpomlglaoledgjlnamdfgfghflan), or [fork the GitHub repo](https://github.com/scottcheng/talking-gmail).

{% img /images/projects/talking-gmail/promo.jpg %}

Talking Gmail adds a "read this message" menu button to your Gmail and reads the entire message with one click. No more struggling with reading lengthy emails with exhausted eyes.

[{% img /images/projects/talking-gmail/scrshot.jpg %}](/images/projects/talking-gmail/scrshot.jpg)

While reading the message, Talking Gmail highlights the paragraph you are listening to, to help you keep track. It also features a controller, enabling you to pause / resume / stop the reading, or jump to the previous / next paragraph.

<script src='/javascripts/libs/jquery.min.js'></script>
<script>
$.noConflict();
jQuery(function($) {
  $('a:has(img)').css('border-bottom', 'none');
});
</script>