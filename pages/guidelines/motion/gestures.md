---
title: Gestures
layout: default-page
category: motion
permalink: motion/gestures/
order: 5
breadcrumbs: true
---

## Gestures

In the real world, objects move due to forces acting upon them. The same happens in motion design. For us, however, a “force” is the interaction of the user with the elements on screen. In addition, inside the layout, the elements in motion can also interact with other elements.
Interaction in touch screens is carried out with gestures. There are plenty kinds of different gestures for the different kinds of interaction. However, the three following rules apply for all of them:

* The elements, which could be interactive with the user through a gesture, have at least one gestured assigned to them (primary/ main).
* The elements could own a “secondary” gesture assigned to them in order to let the user interact with it and do not collapse with other element that could be in the same structure flow. In addition, another reason for having a secondary gesture is that the element could offer an extra functionality. i.e. A user can tap an email item to select it (main gesture) and he could swipe it left to select extra options (secondary).  
* The user input cannot pass through diverse surfaces because once the event is triggered, it focus the touched surface. Furthermore, as you know, surfaces are solid so user cannot touch directly a surface behind the focused one.
