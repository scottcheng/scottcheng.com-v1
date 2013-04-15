---
layout: page
title: "Save2Drive"
comments: true
sharing: true
footer: true
backTo: Projects
backToLink: /projects/
---

Save2Drive is a simple Chrome extension that saves links, images, HTML5 audio and videos directly from Chrome to Google Drive. [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/save-to-drive/deoibeabfchdpckcmamaadeccohilbkp), or [fork the GitHub repo](https://github.com/scottcheng/save2drive).

{% img /images/projects/save2drive/promo.jpg %}

Save2Drive was featured on [Lifehacker](http://lifehacker.com/5963877/save-to-drive-instantly-sends-images-audio-and-video-to-google-drive), [Addictive Tips](http://www.addictivetips.com/web/quickly-save-images-links-audio-video-to-google-drive-from-chrome/), [CNET](http://download.cnet.com/Save-to-Drive/3000-33362_4-75816673.html), [Free Technology for Teachers](http://www.freetech4teachers.com/2012/12/right-click-to-save-images-and-more-to.html), [Gigazine](http://gigazine.net/news/20121217-goole-drive-chrome/), [GuAo](http://www.guao.hk/posts/save-to-drive-instantly-sends-images-audio-and-video-to-google-drive.html) and other online media. I feel thrilled to see the blogs that I have subscribed to since high school are posting about my work. The [write-up](http://www.addictivetips.com/web/quickly-save-images-links-audio-video-to-google-drive-from-chrome/) from [Addictive Tips](http://www.addictivetips.com/) is especially elaborated and detailed. Thank you for all the support!

<!-- http://www.forest.impress.co.jp/docs/review/20121129_575735.html -->
<!-- http://habrahabr.ru/post/160785/ -->
<!-- http://bitelia.com/2012/11/save-to-drive-google-drive-chrome -->

{% img /images/projects/save2drive/scrshot.jpg %}

The hack behind Save2Drive is fairly easy. Google Docs provides an [online viewer](http://docs.google.com/viewer), and some [URL parameter tricks](https://github.com/scottcheng/save2drive/blob/master/background.js#L44) will make the viewer save a file with just a link (to a file, an image, or anything). Simplicity brought along limitations. This is not a documented feature of Google Docs, and I was not able to find out more flexibility to add to this extension. Many users complained that they were not able to preview images saved via Save2Drive, or all the files go to the root folder instead of a user-selected one. Sorry but there is nothing I can do at the moment, unless I integrate Save2Drive with Google Drive API.