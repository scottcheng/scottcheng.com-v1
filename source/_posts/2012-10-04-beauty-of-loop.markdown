---
layout: post
title: "Beauty of Loop"
date: 2012-10-04 22:24
comments: true
categories: dev
keywords: loop, DRY principle, clean code, programming
---

Loops are most commonly used to deal with arrays (e.g. finding the maximum number in an array of integers), or perform similar actions for a range of numbers or enumerables (e.g. calculating a Fibonacci number). If the problem space is dynamic (e.g. calculating the sum of 1 to _n_), loop is often the standard way of traversal (the alternative is recursion); otherwise, it contributes to DRY code by avoiding duplication (compared to an unraveled loop).

However, loop doesn't easily come to mind when handling a fixed data set that you would have to hard-code anyway. For example, when writing a table of names and titles on a webpage (in Jade), the common approach is:

``` jade

table
  tbody
    tr
      th Chairman
      td
        a(href='http://alice.com/', target='_blank') Alice
    tr
      th Recruiting
      td
        a(href='http://bob.com/', target='_blank') Bob
    tr
      th Marketing
      td
        a(href='http://chris.com/', target='_blank') Chris

```

We see the repetitive pattern of table rows, containing a data set that is not literally an array. Repetition is evil, so we should _make an array_ out of the data and loop through it.

``` jade

//- Turn the data into an array
- var people = []
- people[0] = {position: 'Chariman', name: 'Alice', link: 'http://alice.com/'}
- people[1] = {position: 'Recruiting', name: 'Bob', link: 'http://bob.com/'}
- people[2] = {position: 'Marketing', name: 'Chris', link: 'http://chris.com/'}

table
  tbody
    each person in people
      tr
        th= person.position
        td
          a(href='#{person.link}', target='_blank')= person.name

```

This way, we only have to define the format of each person once, which conforms to the [DRY principle](http://programmer.97things.oreilly.com/wiki/index.php/Don't_Repeat_Yourself) (of course, DRY principle is a lot deeper than creating loops):

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

The code becomes cleaner, more maintainable, and less error-prone. You could imagine how much benefit it could bring if there are 50 people in the list.

However, generalization comes at the cost of flexibility, which I've discussed a bit in [a previous post](/blog/2012/08/elegantly-highlight-the-current-nav-item-in-template/). For example, if there are two Marketing people, and one of them doesn't have a website, then the table should look like:

``` jade

table
  tbody
    tr
      th Chairman
      td
        a(href='http://alice.com/', target='_blank') Alice
    tr
      th(rowspan='2') Marketing
      td Bob
    tr
      td
        a(href='http://chris.com/', target='_blank') Chris

```

And the loop solution would be:

``` jade

- var positions = []
- positions[0] = {position: 'Chairman', people: []}
- positions[0].people[0] = {name: 'Alice', link: 'http://alice.com/'}
- positions[1] = {position: 'Marketing', people: []}
- positions[1].people[0] = {name: 'Bob'}
- positions[1].people[1] = {name: 'Chris', link: 'http://chris.com/'}

mixin person(person)
  if person.link
    a(href='#{person.link}', target='_blank')= person.name
  else
    = person.name

table
  tbody
    each pos in positions
      tr
        th(rowspan='#{pos.people.length}')= pos.position
        td
          mixin person(pos.people[0])
      - for (var i = 1; i < pos.people.length; i++)
        tr
          td
            mixin person(pos.people[i])

```

So it's always a trade-off. If there are not many items to operate on and the operation for each item is simple (or in some cases, wildly different from each other), perhaps loop isn't the best way out. Despite of that, I'd advocate applying loops whenever possible, because they can make your code a lot more beautiful, and you'll find your life so much easier because of them.

Bottom line is, don't make a [WET cart](http://thedailywtf.com/Articles/The-WET-Cart.aspx) :)
