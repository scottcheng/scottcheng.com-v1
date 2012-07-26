---
layout: post
title: "Playing with git branches"
date: 2012-07-27 01:36
comments: true
categories: git
published: false
---

Though it has been almost half a year since the first time I "gitted" (and I love it!), all git commands I've used are `clone`, `add`, `commit`, `pull` and `push`, and used in the simplest ways (without many parameters). I've had only a rough idea what a git branch is - I know a project needs a "release" branch and a "dev" branch - but I don't know how it really works and how to achieve it. But when I created [my first GitHub page](http://scottcheng.github.com/the-revolutionary-css3-impressjs/), I have to start dealing with branches. So, _step out of the comfort zone and explore the world!_

Branching 101
---

* Use `git branch <branchname>` or `git checkout -b <branchname>` to create a new branch.
* Use `git branch` to see what view all branches, and find out what branch I'm at.
* Use `git checkout <branchname>` to switch between branches.

There are at least two ways to "merge" changes in different branches: `git merge` and `git rebase`. By `git merge <branchname>`, e.g. `git merge dev` on the master branch, the following happens:

1. Commits in dev branch are merged into master.
   - Handle conflicts if necessary.
2. A new merge commit is created on top of the two branches.

By `git rebase <branchname>`, e.g. `git rebase dev` on the master branch, the following will happen:

1. Commits between the last merge and present on the master branch will be erased (and kept somewhere temporarily).
2. Commits on dev branch will be appended to the original `HEAD` on master (the last merge point).
3. Your changes are put back on top of the dev commits in new commits.
   - Handle conflicts if necessary.

See [here](http://gitready.com/beginner/2009/01/25/branching-and-merging.html) for more on `git branch`, and [here](http://gitready.com/intermediate/2009/01/31/intro-to-rebase.html) for more on `git rebase`. The difference between `git merge` and `git rebase` is elaborated [here](http://www.jarrodspillers.com/2009/08/19/git-merge-vs-git-rebase-avoiding-rebase-hell/) by Jarrod Spillers, thought [slightly flawed](http://www.jarrodspillers.com/2009/08/19/git-merge-vs-git-rebase-avoiding-rebase-hell/#dsq-comment-375332553).

I also found it interesting to learn that `git pull` is actually `git fetch` then `git merge`, whereas `git pull --rebase` is `git fetch` then `git rebase`, as is explained [here](http://linux.die.net/man/1/git-pull).

One thing that kinda surprised me is that different branches coexist in the same directory! As you switch branches using `git checkout <branchname>`, the files in that folder would actually change with it. It's like {WHAT'S THAT HARRY POTTER ROOM CALLED???} - it's the same room, but you can go in and see different things. Amazing. The interesting part is that when I create a file in the repo, it is visible in all branches; but when I `add` and `commit` it in a branch, it will be invisible in other branches. Similarly, when a file is modified in a branch, the changed file will be visible in all branches. Sometimes, however, git does not allow me to switch branches when there are modified files, and I have not figured out why:

    $ git checkout master
      error: Your local changes to the following files would be
      overwritten by checkout:
        devonly.md
      Please, commit your changes or stash them before you can
      switch branches.
      Aborting

Using GitHub pages
---

http://get.inject.io/n/XxsZ6RE7
http://oli.jp/2011/github-pages-workflow/
http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/
http://metafizzy.co/blog/one-docs-to-rule-them-all/