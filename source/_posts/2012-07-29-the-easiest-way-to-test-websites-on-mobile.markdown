---
layout: post
title: "(Probably) the Easiest Way to Test Websites on Mobile"
date: 2012-07-29 01:52
comments: true
categories: webdev
---

This is probably _the_ easiest way to test your websites on a mobile device, especially if you don't have a server to host your site: (and it came to me when I wanted to test mine last night)

1. Run a localhost on your machine, may it be [express](http://expressjs.com/), [Apache](http://httpd.apache.org/), or anything that responds to HTTP requests.
2. Find out your machine's IP address _in its local network_.
3. Connect your phone or tablet to the same local network with your "server" in it.
4. Visit \<host_ip\>:\<port\> on your mobile browser.

That's it - start playing with your site on the mobile device! The best part is, every time you update something, just refresh on your mobile browser and the change is there. How can that be any simpler!

Below is how this post looks on my [Xperia S](http://www.sonymobile.com/global-en/products/phones/xperia-s/). I'm using Octopress preview, and it runs on 4000 by default.

{% img /images/posts/octopress-on-xperia-s.png %}