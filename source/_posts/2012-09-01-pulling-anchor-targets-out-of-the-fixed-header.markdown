---
layout: post
title: "Pulling Anchor Targets out of the Fixed Header"
date: 2012-09-01 22:23
comments: true
categories: [webdev, css]
keywords: css, fixed header, jump link, in-page link, anchor
---

I've been using [Bootstrap](http://twitter.github.com/bootstrap/) in [my latest website](http://www.beijing3ds.org/) (if you haven't tried Bootstrap, you really should! It makes lots of things *worlds* easier, and has taught me a handful of good practices), where I used a fix-positioned navigation header, one that always stays at the top of the window. In [longer pages](http://www.beijing3ds.org/about/), I used a secondary in-page navigation.

One particular issue I encountered is that when I click on one of those in-page navs, a big portion of that section will be covered by the header! In case you don't know what I'm talking about -- instead of looking like this as it should:

{% img /images/posts/anchor-and-header-should.png %}

It looked like this:

{% img /images/posts/anchor-and-header-actual.png %}

See? The "before the weekend" heading goes beneath the nav bar.

So I went to the Bootstrap site, where in-page nav is [pervasively used](http://twitter.github.com/bootstrap/getting-started.html), seeking the "official" solution. A `padding-top: 30px;` [did the trick for them](http://twitter.github.com/bootstrap/getting-started.html#download-bootstrap).

But this is not a perfect fix for me. The Bootstrap header is merely 40px high, whereas mine is 87px (main nav and sub nav stacked). 30px between sections is acceptable, 80px isn't.

To solve my problem, while applying a big `padding-top`, I have to keep the spacing between sections from going too wide -- negative `margin-top` immediately came to mind. So here comes my final solution that pulls the content from behind the nav bar:

``` css My final solution

section {
  padding-top: 87px;
  margin-top: -87px;
}

```

See it in action in [this fiddle](http://jsfiddle.net/sybrix/ktPqd/).


P.S. As I was trying to find out what others have to say on this topic on Stack Overflow, [an answer](http://stackoverflow.com/questions/4086107/html-positionfixed-page-header-and-in-page-anchors#answer-9618795) took me to [Nicolas Gallagher's master list of solutions to this very problem](http://nicolasgallagher.com/jump-links-and-viewport-positioning/demo/), with analyses on each of his five methods. Great work!

P.P.S. Pardon my ignorance, but what is the official terminology of the "in-page link" I've talked about in this post? "Jump link"? I found a few uses of "jump link" after Googling, but honestly I've never heard of this term before, and it doesn't look very much like *the* way it's called to me.