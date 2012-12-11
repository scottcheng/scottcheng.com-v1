---
layout: page
title: "Omni Image Search"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
---

Omni Image Search is a dead simple Chrome extension that makes image search equally simple. [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/omni-image-search/ljaijbfeiipempfedbghhnodnamflpcg), or [fork the GitHub repo](https://github.com/scottcheng/omni-image-search).

{% img /images/projects/omni-image-search/promo.png %}

I'm a big fan of shortcuts and command-based operations. They make me feel ultra-productive. Chrome's Omnibox has enabled commands within the browser. Omni Image Search takes advantage of Omnibox and makes it ultimately simple to Google images.

[{% img /images/projects/omni-image-search/scrshot.png %}](/images/projects/omni-image-search/scrshot.png)


<script src='/javascripts/libs/jquery.min.js'></script>
<script>
$.noConflict();
jQuery(function($) {
  $('a:has(img)').css('border-bottom', 'none');
});
</script>