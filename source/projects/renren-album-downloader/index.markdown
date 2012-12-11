---
layout: page
title: "Renren Album Downloader"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
---

Renren Album Downloader is a Chrome extension that enables you to download an entire Renren album with one click. [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/%E4%BA%BA%E4%BA%BA%E7%9B%B8%E5%86%8C%E4%B8%8B%E8%BD%BD%E5%99%A8/enmkdplopmpkfnlefdldpkbcmihgcdec), or [fork the GitHub repo](https://github.com/scottcheng/renren-album-downloader).

[Renren](http://www.crunchbase.com/company/renren) is China's Facebook.

{% img /images/projects/renren-album-downloader/promo.jpg %}

Renren Album Downloader creates a "download" button on a Renren album page. When triggered, it analyzes the DOM, fetches the photos, packs them into a zip, and sends it to your disk.

<!-- TODO re-screenshot -->

There are millions of interesting albums on Renren, and I sometimes wish I could somehow collect these beautiful or inspiring images. Storing them in my hard drive is a good choice, but downloading albums of 100 photos is a disaster. Also, very often do we see a long list of comments like "please pack and email album to me at foo@bar.com" under popular albums. I doubt if the album owners ever fulfill these demands. Apparently, Renren users are calling for the feature of full-album download. That's where I set off to create my first Chrome extension.