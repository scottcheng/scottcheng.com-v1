---
layout: page
title: "About"
comments: true
sharing: true
footer: true
---

{% img center /images/scott.jpg 300 %}

Hello there, my name is 程烨 (CHENG Ye). Call me Scott.

I'm a technology enthusiast, a design lover, and a Master student at [Stanford CS](http://cs.stanford.edu/). I enjoy crafting stuff that people love.

I believe that skills are cheap; passion and taste make all the difference.

Hit me up on
<span class="social-link" style="color:#000">[GitHub](https://github.com/scottcheng)</span> |
<span class="social-link" style="color:#a37559">[Instagram](http://instagram.com/scottcheng)</span> |
<span class="social-link" style="color:#3b5998">[Facebook](https://www.facebook.com/sctcheng)</span> |
<span class="social-link" style="color:#4fd3ff">[Twitter](https://twitter.com/sctcheng)</span>,
or say hello to <span class="social-link" style="color:#e14f44"><aloha@scottcheng.com></span>.


About this site
---

This website is powered by [Octopress](http://octopress.org) and hosted on [GitHub Pages](http://pages.github.com/).

For now I've only slightly tweaked the default Octopress theme (besides making a simple [landing page](/)), but I'm planning to rewrite all the templates in the coming future.


License
---

All original photographs, images and text on this website are Copyright &copy; {{ site.time | date: "%Y" }} [{{ site.author }}](http://scottcheng.com/) and licensed under a [CC BY 3.0 license](http://creativecommons.org/licenses/by/3.0/).

All original code on this website is Copyright &copy; {{ site.time | date: "%Y" }} [{{ site.author }}](http://scottcheng.com/) and licensed under the [MIT license](http://opensource.org/comment/935).

<script src='/javascripts/libs/jquery.min.js'></script>
<script>
$.noConflict();
jQuery(function($) {
  $('.social-link').click(function() {
    _gaq.push(['_trackEvent', 'About', 'Connect', $(this).text()]);
  });
});
</script>