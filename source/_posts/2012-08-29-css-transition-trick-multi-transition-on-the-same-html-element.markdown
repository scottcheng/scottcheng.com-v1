---
layout: post
title: "CSS Transition Trick: Multi-Transition on the Same HTML Element"
date: 2012-08-29 01:36
comments: true
categories: [webdev, css]
keywords: css, css3, css transition, css trick
---

_It's one thing to know a tool, another to make the most of it._

[Transition](http://www.webdesignerdepot.com/2010/01/css-transitions-101/) is one of my favorite features that CSS3 has brought to the front-end toolkit. Smooth color change on hover can be achieved as easily as the following (see [links](#) on this site for live examples):

``` css Smooth hover color change (anchor)

a {
  color: #555;
  transiton: color .25s;  /* vendor prefix emitted */
}
a:hover {
  color: #ed6812;
}

```

This is how I've always learned to use the transition property -- only apply one transition rule to the element. However, what if we declare another different transition property in the `:hover` block?

<!-- more -->

Turns out it does magic. Try moving your mouse in and out of the bar:

<div id="multi-transition-bar">
  <div id="multi-transition-bar-inner"></div>
</div>

``` css Gentle-growing & rapid-dropping

#bar-inner {
  width: 5%;

  /* transition rule when not hovered */
  transition: width .5s .5s ease-in;
}

#bar:hover > #bar-inner {
  width: 100%;

  /* transition rule when hovered */
  transition: width 10s 0 ease-out;
}

```

That is, make the bar move much slower when hovered than otherwise, i.e. much slower when growing than when dropping. Also, different delays and timing functions are applied to the different states.

I also used this multi-transition trick to create the trailing dots effect of [this experiment](/lab/grid/), where the dots fade in fast and fade out slowly.

It's just exhilarating to explore new power of familiar tools.