---
title: Motion features
layout: default-page
category: motion
permalink: motion/motion-features/
order: 3
breadcrumbs: true
---

## Responsive

The material environment is based on real-world forces such as gravity and friction. These forces are reflected in the way user input affects the elements on screen and how they react to each other.

### Natural
Material speeds up or slows down depending on its weight, the surface friction and the forces applied upon it. It means that material does not start or stop instantaneously.
{% include website/video.html src="videos/motion-design/forces.mp4" %}
_User interaction is not isolated as a force. External forces like gravity and the interaction with other materials will affect the material movement and, as a result, its direction and acceleration will change._

### Conscious
Material is not only conscious about the interaction with the user, but also about the rest of items around it. That is to say, everything interacts with everything
{% include website/video.html src="videos/motion-design/responsive.mp4" %}

### Focus
One of the main reasons d’être of motion is to bring focus to objects that need user attention.
{% include website/video.html src="videos/motion-design/focus.mp4" %}

## Timing

The feelings of ‘real world’ and ‘natural’ are present in all motion principles and therefore **time** and **speed** too.

The combination of both features should outcome a good motion design. But what is a ‘good motion’ ?

- **Not too slow, not too fast.** The animation must be fast enough to avoid the feeling of waiting too much and, at the same time, slow enough to let the user understand what is happening.
- Each animation must have a certain duration in order to accommodate the distance travelled, the element velocity and the surface changes.
- Animations of elements "leaving" the screen should have shorter duration to divert the user attention. On the other hand, elements "entering" should take a little longer in order to attract the attention.
- It must provide feedback. It could be explicit or discreet, it doesn’t matter as long as it becomes useful to the user.
- It should be clear, coherent and cohesive. Too much weight could eclipse the purpose of the motion.
- Its timing should be adapted to the device screen size.
- It should not exceed the 400ms of duration. It affects the device performance, distracts the user attention and breaks the rules mentioned before.

In addition to the previous points, a timing reference is given below for different device screen sizes with their corresponding time factors. These factors will be used to get the outcome duration from the default timing values in mobile screens.

[comment]: <> (Timing table [PNG])
{% include website/image.html src="images/motion-design/timing.png" %}

Nowadays, apps are designed with the 'mobile first' approach, therefore motion design has to be implemented in the same way. This is why the default screen size is "mobile" (the exact size in inches does not matter as long as it is a mobile device).

With that in mind, for bigger screens we will use higher factors while lower factors will be used for smaller screens. The result: higher factor, slower animation; lower factor, faster animation.


## Curves

We already know that our elements and components are responsive. We also their timing features. Let's see now how they accelerate using the following curves.  

* **Linear** - Basic (no acceleration, constant speed) Common uses: color and opacity transitions.
* **ease-in** - Basic (constant acceleration, increasing speed) Used for outgoing elements. They leave the screen at full speed and don't decelerate at the end.
* **ease-out** - Basic  (constant deceleration, decreasing speed) Used for incoming elements. They enter the screen at full speed without previous acceleration and stop softly at the end.
* **ease-in-out** - Basic - Starts with an ease-in curve and finishes with an ease-out, i.e. elements start moving accelerating and softly stop decelerating.
* **cubic-bezier** - Advanced - This curve is quite customizable thanks to its required parameters. That allows us to reproduce very natural movements. http://cubic-bezier.com/
* **spring** - Advanced - This is the best curve to use in motion because the resulted movement is extremely similar to the real world, very smooth and natural in all aspects: speed, acceleration and deceleration, elasticity, objects weight, surface resistance and gliding. That's why this curve is the most used one for our animations.

To get this outcome, the parameters of the curve must be balanced correctly:

**Tension**: It is the strength of the spring. It corresponds to the force applied upon an object in real life.

**Friction**: It is the resistance of the spring. See it like the combination of the weight of an object and the resistance of the surface.

**Velocity**: It is the speed of the object at the animation starting point.

These parameters allow us to create any kind of animation. Below we provide the settings (value of each parameter) for the most common animations. In order to clarify the concepts below, the first point is the value for Framer (the software used for prototyping animations) and Velocity.js plugin used by front-ends, and the last one, is an approximated adaptation of these values to the cubic-bezier curve.

* **Elastic**
    + Framer.js: spring(300, 30, 10) ~ spring(300, 30, 20)
    + CSS: cubic-bezier(.45,0,0,1.35)
    + time: 0.26s ~     time: 0.21s

* **Bounce**
    + Framer: spring(450, 25, 10) ~ spring(450, 25, 20)
    + CSS: cubic-bezier(.3,.4,0,1.6)
    + time: 0.26s ~     time: 0.21s

* **Extra-bounce**
    + Framer: spring(700, 25, 20) ~ spring(700, 20, 25)
    + CSS: cubic-bezier(.3,.4,0,2) ~ cubic-bezier(.3,.4,0,2)
    + time: 0.25s ~     time: 0.21s*
    > _(For this curve and timing, the natural bounce is totally lost. C-Bezier cannot reach same outcome of the spring curve)_

* **Smooth**
    + Framer: spring(200, 30, 15) ~ spring(200, 30, 20)
    + CSS: cubic-bezier(.3,.4,0,1) ~ cubic-bezier(.3,.4,0,1)
    + time: 0.35s ~     time: 0.3s

* **Smooth-fast**
    + Framer: spring(300, 0, 10) ~ spring(300, 0, 20)
    + CSS: cubic-bezier(.3,.4,0,1.2) ~ cubic-bezier(.3,.4,0,1.45)
    + time: 0.3s ~     time: 0.27s

* **Smooth-in**
    + Framer: spring(250, 40, 10)
    + CSS: cubic-bezier(.3,.4,0,1)
    + time: 0.5s

* **Smooth-out**
    + Framer: spring(300, 40, 20)
    + CSS: cubic-bezier(.3,.4,0,1)
    + time: 0.3s

## Object relationship

One of the main raisons d'être of motion is to attract the user attention and avoid confusing them. Therefore we must consider all the elements present in the layout that are involved in the animation.

**Incoming elements** are generated or relocated. They can be introduced as new items or re-established into the scene.

**Outgoing elements** are no longer relevant to the context. They can be removed or just hidden from the scene.
{% include website/video.html src="videos/motion-design/incomingoutgoingelements.mp4" %}

For the incoming and outgoing elements we must consider the next points to maintain a good motion flow.

* The animated element should start from the point of touch and/or the interaction  origin with another element(s).
* The element(s) should describe a smooth and clear path.
* If there are a consecutive animation of elements, the delay between them should not be more than 20ms.
* The paths should not cross one another.

### Shared elements

When a surface expands or in transitions between views, some elements might remain visible while some others can disappear. Let's consider the following three scenarios:

#### All elements are shared

Every element present in the first state or view will remain visible in the final one. That can be complex. Try always to focus the user attention on the most important element. If several elements need to change their position, they should disappear and reappear at the end. Otherwise the transition could be confusing.
{% include website/video.html src="videos/motion-design/shared-all.mp4" %}

#### Few elements are shared

If only a few elements are present through the whole transition, we should focus the user attention on those elements.
{% include website/video.html src="videos/motion-design/shared-few.mp4" %}


#### No shared elements

There might be elements present at the beginning and also at the end or there might not be any of them. In any case, they do not persist during the animation. They just appear or disappear from the scene, depending on the needs.
{% include website/video.html src="videos/motion-design/shared-none.mp4" %}

## Choreography

We should consider the timing and object relationship in order to show the user the hierarchy and the path of the elements. Combining all those features in the right way, we set a choreography.

#### Good choreography
{% include website/video.html src="videos/motion-design/choreography-good.mp4" %}

#### Bad choreography
{% include website/video.html src="videos/motion-design/choreography-bad.mp4" %}
