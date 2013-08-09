---
layout: post
title: "Ember vs Backbone: Event Model"
date: 2013-08-09 00:05
comments: true
categories: webdev
keywords: ember, backbone, web app, spa, single page application, event, event model, publish/subscribe
---

Lately I've been playing with [Ember](http://emberjs.com/) and [Backbone](http://backbonejs.org/), and enjoying these modern tools for building modern web applications (I'll try [Angular](http://angularjs.org/) next.) Ember and Backbone are different [in many ways](http://smus.com/backbone-and-ember/). While writing apps with them, I have realized that, apart from all the architectural/philosophical divergence, they employ very different approaches to event subscription, which is a critical part of any UI application.

<!-- more -->

Backbone apps depend heavily upon Backbone's [event model](http://backbonejs.org/#Events). The idea is simple: object A listens to object B's event C, and gets notified whenever C is triggered on B. Ember does it differently. Instead of having one unified event model, Ember breaks the publish/subscribe pattern into [Bindings](http://emberjs.com/guides/object-model/bindings/), [Observers](http://emberjs.com/guides/object-model/observers/), and [Computed Properties](http://emberjs.com/guides/object-model/computed-properties/), while not providing explicit event listening. The breakdown is insightful, and [each has different uses](http://emberjs.com/guides/object-model/what-do-i-use-when/). However, I've found cases where none of them is as helpful as the old event pub/sub pattern.

When building [Sparkl](http://www.sparkl.us), I needed to animate the interface whenever a user likes an item. Any user, not just the person in front of this interface. Therefore, I'm triggering a "getting liked" event from the model. This would be straightforward in Backbone:

``` coffeescript
# In model
like: ->
  # Update model
  @trigger 'liked'

# In View
initialize: ->
  @listenTo @model, 'liked', ->
    # Animate
```

When I tried to use Ember's observer, however, I realized that I can only observe property updates. "Getting liked" is an event, and there is no property here to be observed! Therefore I would have to make up a variable to record the event of "getting liked". It won't work if the variable stores information of the user liking it, because if a user likes the item, unlikes it, and likes it again, this variable won't update at the second like, and the observer won't fire. So I decided to track the time when the item gets liked, and observe this property from view:

``` coffeescript
# In model
like: ->
  # Update model
  @set 'latestLikeDate', Date.now()

# In view
animateLike: ( ->
  # Animate
).observes 'controller.model.latestLikeDate'
```

Not very complex code, but a little tricky. Another downside is that extraneous properties are introduced to the model, and needs to be filtered out when sending model to server. So while Ember provides new approaches to address common problems, perhaps traditional solutions are still good to have.

## Update: Ember.Evented

I discovered that Ember has an [Evented mixin](https://github.com/emberjs/ember.js/blob/v1.0.0-rc.6/packages/ember-runtime/lib/mixins/evented.js), which supports similar event pub/sub as in Backbone. Now I'm using this:

``` coffeescript
# In model
like: ->
  # Update model
  @trigger 'isLiked'

# In view
init: ->
  @get('controller.model').on 'isLiked', ->
    # Animate
```

Much better.
