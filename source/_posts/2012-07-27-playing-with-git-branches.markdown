---
layout: post
title: "Playing With Git Branches"
date: 2012-07-27 01:36
comments: true
categories: git
---

Though it has been almost half a year since the first time I "gitted" (and I love it!), all git commands I've ever used are `clone`, `add`, `commit`, `pull` and `push`. But when I created [my first GitHub page](http://scottcheng.github.com/the-revolutionary-css3-impressjs/), I had to start dealing with branches. It's like a rewarding "stepping out of the comfort zone" experience. I very much enjoyed this brief exploration, and would like to write down what I learned about branching in the process.

Branching 101
---

First, the very basics of branch management:

* Use `git branch <branchname>` or `git checkout -b <branchname>` to create a new branch.
  + If you want the new branch to exist on the remote, push it with `git push origin <branchname>`.
* Use `git branch` to view all branches, and find out what branch you are at.
* Use `git checkout <branchname>` to switch between branches.
* Use `git branch -d <branchname>` to delete a branch locally.
* Use `git push origin :<branchname>` (with the colon) to delete it on the remote.

Merging and Rebasing
---

Branches often need to interact by merging their changes. There are at least two ways to "merge" changes in different branches: `git merge` and `git rebase`. By `git merge <branchname>`, e.g. `git merge dev` on the master branch, the following happens:

1. Commits in dev branch are merged into master.
   - Handle conflicts if necessary.
2. A new merge commit is created on top of the two branches.

By `git rebase <branchname>`, e.g. `git rebase dev` on the master branch, the following will happen:

1. Commits between the last merge and present on the master branch will be erased (and kept somewhere temporarily).
2. Commits on dev branch will be appended to the original `HEAD` on master (the last merge point).
3. Your changes are put back on top of the dev commits in new commits.
   - Handle conflicts if necessary.

If you are interested in the detailed mechanism, [git-scm.com](http://git-scm.com/) has more on [branching / merging](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging) and [rebasing](http://git-scm.com/book/en/Git-Branching-Rebasing). Jarrod Spillers [elaborated in a post](http://www.jarrodspillers.com/2009/08/19/git-merge-vs-git-rebase-avoiding-rebase-hell/) the difference between `git merge` and `git rebase` as well as when to use which, thought [slightly flawed](http://www.jarrodspillers.com/2009/08/19/git-merge-vs-git-rebase-avoiding-rebase-hell/#dsq-comment-375332553).

I also found it interesting to learn that `git pull` is actually `git fetch` then `git merge`, whereas `git pull --rebase` is `git fetch` then `git rebase`, as is documented on the [man page](http://www.kernel.org/pub/software/scm/git/docs/git-pull.html).

One thing that kinda surprised me is that different branches actually coexist in the same directory! As you switch branches using `git checkout <branchname>`, the files in that folder would actually change with it. It's like the [Room  of Requirement](http://harrypotter.wikia.com/wiki/Room_of_Requirement) in Harry Potter -- it's the same room, but you can go in and see different things. Amazing. The interesting part is that when I create a file in the repo, it is visible in all branches; but when I `add` and `commit` it in a branch, it becomes "private" and vanishes in other branches. Similarly, when a file is modified in a branch, the change is visible everywhere. Sometimes, however, Git does not allow me to switch branches when there are modified files, and I have not figured out why:

``` bash
  # On dev branch and modified devonly.md
$ git checkout master
  error: Your local changes to the following files would be
  overwritten by checkout:
    devonly.md
  Please, commit your changes or stash them before you can
  switch branches.
  Aborting
```

Branching gh-pages
---

Now I'll put the branching theory to practice and build my GitHub page. The [GitHub pages documentation](https://help.github.com/articles/creating-project-pages-manually) is perfect if you want to create a page from scratch. I believe this is useful for most projects, but not for [mine](https://github.com/scottcheng/the-revolutionary-css3-impressjs), where I want the project itself to be the GitHub page.

``` bash Create gh-pages branch
$ git checkout -b gh-pages
$ git push origin gh-pages
```

Now gh-pages and master branch are on the same "page". From this point on, If you want to keep the gh-pages in sync with master branch, you should only commit changes to the master branch, and merge them to gh-pages when the page is ready to go public, using `git merge master` or `git rebase master` (as Lea Verou [does it](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)) on the gh-pages branch.

However, my need is somewhat different: I don't want the `src` directory in gh-pages branch; the HTML, CSS and JavaScirpt are sufficient for my static page. So I did `git rm -r src` on gh-pages branch. The problem is, future merges will most probably pose conflicts, since I will constantly update `src` on the master branch which I just deleted on the gh-pages branch. No worries, here is a solution. As Nicolas Gallagher [points out](http://nicolasgallagher.com/git-checkout-specific-files-from-another-branch/), instead of merging the entire branch, I can choose to only merge changes in specific files:

``` bash
$ git checkout gh-pages
$ git checkout master -- index.html style.css
  # Only merge index.html and style.css
$ git commit -m 'commit message'
$ git push
  # Add `origin gh-pages` if you don't want to push to master
```

Side note: if the project is all about the web page, Oli Studholme offered [another solution](http://oli.jp/2011/github-pages-workflow/#setup) to simply delete the master branch and only keep gh-pages. This could also work for me.

This is pretty much all I need to know to handle my page, but there's more. I've learned from [this snippet](http://get.inject.io/n/XxsZ6RE7) that a [git hook](http://git-scm.com/book/en/Customizing-Git-Git-Hooks) can be used to automate this syncing process, and I have tailored it to my use case:

``` bash post-commit
#!/bin/sh
git checkout gh-pages
git checkout master -- index.html style.css
git commit -m 'updated gh page'  # Commit loop!
git checkout master
```

Name it as `post-commit`, put it under `repo/.git/hooks`, and the script will run after each commit (as the name "post-commit" suggests). This way, gh-pages branch will automagically sync with master! Just don't forget to make sure `post-commit` is executable.

The caveat here is the `git commit` in the hook script (line 4) -- it will cause an unwanted commit loop. There seems [no way](http://comments.gmane.org/gmane.comp.version-control.git/69365) to bypass the post-commit hook (`--no-verify` or `-n` only bypasses [pre-commit](http://www.kernel.org/pub/software/scm/git/docs/githooks.html#_pre_commit) and [commit_msg](http://www.kernel.org/pub/software/scm/git/docs/githooks.html#_commit_msg)). Fortunately, git is smart enough to kill the loop soon enough before it goes bad, so basically this hook works alright.