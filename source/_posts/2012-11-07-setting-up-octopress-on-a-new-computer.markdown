---
layout: post
title: "Setting Up Octopress on a New Computer"
date: 2012-11-07 23:14
comments: true
categories: 
keywords: Octopress, setup, multiple computer, new computer, git, GitHub, GitHub Pages, tutorial
---

A good blogging system must support users to easily start composing and publishing from multiple devices. However, the Octopress website only teaches [how to create a fresh blog](http://octopress.org/docs/setup/), but talks nothing about setting up an existing blog on a fresh computer. This operation turned out to be somewhat confusing to me, and obviously I'm [not alone on this](https://github.com/imathis/octopress/issues/755). So here I record the process, partly for my later reference, partly in hope to help others.

Here is a context: I'm using GitHub user pages ([scottcheng.github.com](http://scottcheng.github.com/)) to host my Octopress blog, so this walk-through may or may not apply to your case. It shouldn't be too far off, though.

1. Clone your old blog repo with all your previous posts in it (instead of [a fresh Octopress repo](https://github.com/imathis/octopress)).
2. Unless you changed the repo's default branch, you now have the master branch containing the static site. In this case, use `git checkout source` to grab the source files.
3. [Install the dependencies](http://octopress.org/docs/setup/) if you haven't yet.
4. Run <code><a href="http://octopress.org/docs/deploying/github/">rake setup_github_pages</a></code>, and Octopress will point your generated site (in _deploy folder) to the master branch -- you can deploy now.
5. Remove master branch locally with `git branch -d master`. Otherwise, every time you do `git push`, git will alert conflicts on the master branch.
   * Alternative 1: `git push origin source` all the time.
   * Alternative 2: use <code><a href="http://git-scm.com/docs/git-config">git config</a> push.default current</code> to only push the current branch (i.e. source branch) by default in `git push`.
6. Start blogging!

Be a happy owner of your new machine, and don't let Octopress get in the way ;)