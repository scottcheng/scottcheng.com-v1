---
layout: post
title: "Respond to Me"
date: 2012-09-19 18:04
comments: true
categories: ux
keywords: UI responsiveness, UX, UI, design, user experience, user interface
---

I've always been a big fan of UI responsiveness, and I believe it's one of the indispensable features of a successful UI. I'm not talking about the lightning speed that [Instagram has achieved](https://speakerdeck.com/u/mikeyk/p/secrets-to-lightning-fast-mobile-design), but that the UI should provide _instantaneous feedback_ to every meaningful action the user performs -- _respond to him_.

Hover effect is a good example of responsiveness. On this website, [links](#) turn orange when you move your mouse over them, assuring you that "you are pointing to the link, click ahead".

Responsiveness is more crucial for user actions to which the handler would take some time to "return". A UI does not have to be lightning fast (though it's definitely good to be). In fact, the processing speed is sometimes out of the developers' control, e.g. if remote API calls are involved. A user can wait, but the UI has to _explicitly tell the user_ that "your request is being processed, please wait". Otherwise, the user would wonder: did I really click the button? Should I keep waiting, or should I repeat the click? What is going on behind the screen? Put another way, the UI should be upfront about what it is doing, so that the user doesn't have to guess.

Pocket over Readability
---

I prefer Pocket over Readability, because Pocket's Chrome extension is more responsive than its competitor. When I press Ctrl+Shift+P (Pocket's shortcut), it instantly pops up a banner that reads "Saving to Pocket", and after a brief wait, the text changes to "Page saved". When I hit Shift+\` (Readability's shortcut), however, I'll have to wait several seconds before anything happens, which I find extremely annoying.

{% img /images/posts/responsiveness-pocket.png %}

My Practices
---

I've been striving to offer best responsiveness in the UIs I build.

In [Save2Drive](https://chrome.google.com/webstore/detail/deoibeabfchdpckcmamaadeccohilbkp), after user clicks "Save to Drive", I first pop up a [desktop notification](http://www.html5rocks.com/en/tutorials/notifications/quick/) that says "Saving link to Google Drive":

{% img /images/posts/responsiveness-s2d-saving.png %}

Then I send the HTTP request. After the callback fires, it either changes to "Link saved to Google Drive":

{% img /images/posts/responsiveness-s2d-saved.png %}

Or "Failed to save link to Google Drive":

{% img /images/posts/responsiveness-s2d-failed.png %}

[Renren Album Downloader](https://chrome.google.com/webstore/detail/enmkdplopmpkfnlefdldpkbcmihgcdec) is a bit more complicated. After the user asks to download an album, the extension will follow these steps, all with explicit real-time status update (UI update happens _before_ the corresponding code runs):

<ol>
  <li>
    <p>Look for photo URLs in the HTML:</p>
    <p><img src="/images/posts/responsiveness-rad-analyzing.png" /></p>
  </li>
  <li>
    <p>Fetch the photos:</p>
    <p><img src="/images/posts/responsiveness-rad-fetching.png" /></p>
  </li>
  <li>
    <p>Put everything into a zip:</p>
    <p><img src="/images/posts/responsiveness-rad-zipping.png" /></p>
  </li>
  <li>
    <p>Finally, tell user it's done:</p>
    <p><img src="/images/posts/responsiveness-rad-done.png" /><p>
  </li>
</ol>

Rule of thumb: if you have the user waiting, tell him he's waiting, and preferably tell him what he's waiting for.
