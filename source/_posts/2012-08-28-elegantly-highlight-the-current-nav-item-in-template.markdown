---
layout: post
title: "Elegantly Highlight the Current Nav Item in Template"
date: 2012-08-28 7:51
comments: true
categories: webdev
keywords: jade, template, navigation, current, highlight, active
---

It's one of the most common practices in web design to highlight the current navigation tab that the user is browsing. See [my latest work](http://www.beijing3ds.org/) for a live example:

{% img /images/posts/beijing3ds-navbar.png %}

Some suggest a [CSS solution](http://hicksdesign.co.uk/journal/highlighting-current-page-with-css), which introduces additional coupling between CSS rules and navigation HTML markup. Some use simple JavaScript hacks and match the current location against the nav link, something like:

``` javascript A jQuery solution

var link = window.location.pathname.match(/\w+/)[0];
$('nav li > a[href*="' + link + '"]').parent().addClass('active');

```

Which brings, well, additional script to run.

A JavaScript fan though I am, I believe that this "active" style is static, and all static styles should be accomplished by the server, rather than by client-side script. None of the templating languages that I've used, however, natively provides an graceful way of doing this ordinary task (they _should!_).

I'll take my current favorite templating engine, [Jade](http://jade-lang.com/), for example. Here is a most direct method:

``` jade Straightforward method

nav
  ul

    //- Suppose we have a local variable `menu`
    //- indicating the nav item to highlight

    if menu === 'home'
      li.active
        a(href='/') Home
    else
      li
        a(href='/') Home

    if menu === 'blog'
      li.active
        a(href='/blog') Blog
    else
      li
        a(href='/blog') Blog

    if menu === 'about'
      li.active
        a(href='/about') About
    else
      li
        a(href='/about') About

```

Too much duplication! When the code is [WET](http://thedailywtf.com/Articles/The-WET-Cart.aspx), we can almost always [DRY](http://programmer.97things.oreilly.com/wiki/index.php/Don't_Repeat_Yourself) things up a bit with loops (inspired by [Peter](http://peterlyons.com/)'s [solution](http://stackoverflow.com/questions/10713923/node-js-jade-express-how-can-i-create-a-navigation-that-will-set-class-acti#answer-10714267)):

``` jade Loop method

nav
  ul
    each nav in ['home', 'blog', 'about']
      if menu === nav
        li.active
          a(href='/#{nav}')= nav
          //- Use CSS to control case, e.g.,
          //- `text-transform: capitalize`
      else
        li
          a(href='/#{nav}')= nav

```

Lookin' neat, except the "Home" link should point to root instead of `/home`. A dirty hack will do:

``` jade Revised loop method

nav
  ul
    each nav in ['home', 'blog', 'about']
      if menu === nav
        li.active
          a(href='/#{nav === 'home' ? '' : nav}')= nav
      else
        li
          a(href='/#{nav === 'home' ? '' : nav}')= nav

```

This looks good, as long as it meets the need. However, what if we want some anchor text _wildly_ different from the links? We can further tweak it:

``` jade Further revised loop method

nav
  ul
    each nav in [{link: '', caption: 'home'}, {link: 'blog', caption: 'Essays'}, {link: 'about', caption: 'Bio'}]

      //- Suppose we have a local variable `navlink`
      //- indicating the link of the nav item to highlight

      if navlink === nav.link
        li.active
          a(href='/#{nav.link}')= nav.caption
      else
        li
          a(href='/#{nav.link}')= nav.caption

```

Works, with one caveat: Jade [doesn't support](https://github.com/visionmedia/jade/issues/502) multi-line array literal or JavaScript code, which means the entire navigation array (all the `link`s and `caption`s) has to be packed into a single line of code! Unreadable, hard to maintain -- not so appealing to me.

Here I'd like to propose a solution without too much in a line. It requires some repetition, but doesn't feel too WET:

``` jade My favorite method

nav

  //- pass `menu` to li class attribute
  //- through a dictionary `nav`
  - var nav = {}; nav[menu] = 'active'

  ul
    li(class='#{nav.home}')
      a(href='/') Home
    li(class='#{nav.blog}')
      a(href='/about') Essays
    li(class='#{nav.about}')
      a(href='/contact') Bio

```

I love it because (a) it's truly flexible, and (b) it's clever enough to take out the `if`. The key here is "invert mapping" -- from `menu -> <nav-item>` to `<nav-item> -> active`, made possible by a "dictionary" (Python jargon, I think more appropriate than "map" or "object" here).

Not perfect, but more elegant than the rest.