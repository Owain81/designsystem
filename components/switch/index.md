---
layout: component
category: components
title: Switch
order: 14

tabs: true

usage: |
 ## General overview

 A control that is used to change a setting between two mutually exclusive states - on and off.

 {:.alert.alert-info}
 * Takes less space than an ‘on’ off radio button group.
 * Communicate its purpose better than a single checkbox.
 * Switch is used for  “On/Off” or “True/False” situations.
 * Need to be labelled clearly to know what will happen if the user turns it on or off, otherwise split it in two radio buttons with different labels.
 * Consider to use for managing settings within a list or form or manage the availability of related interface elements.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Search, sort and filter](../../ui-patterns/search-sort-and-filter/).
 {:.section-end}

 ## Behaviour

 The selection can have immediate effect over a screen element or be a setting for a later confirmation. As for the label, it can be on top or inline with the control.

 Users can select the switch state by:

 * Clicking it or tapping in touchscreen devices.
 * Tabbing to it and the pressing the 'Enter' key.
 * Swiping to a side.
 {:.section-end}

do-and-dont:
- title: Do
  text: Provide a general label to describe the switch purpose.
  columns: 6
- title: Avoid
  text: Adding labels to describe the values of a switch, it’s redundant and adds clutter.
  columns: 6
- title: Do
  text: Label should be descriptive and positive.
  columns: 6
- title: Don't
  text: Use negative wording that may confuse the user.
  columns: 6
- title: Do
  text: Try to present your lists vertically, with one choice per line.
  columns: 6
- title: Avoid
  text: Displaying options in rows, specially if there isn’t enough space in between.
  columns: 6
- title: Do
  text: Use within a list or form.
  columns: 6
- title: Don't
  text: Use within a toolbar.
  columns: 6

#placement:
#- title: Z Pattern
#  text: The Z-pattern is a natural way for the user to go through content within a constrained container and when tasks are oriented from the top-left and ending with a primary call to action on the right bottom side of the container.
#  image:
#  caption: Modals and Wizards follow the Z Pattern.
#- title: F Pattern
#  text: The F-pattern is a natural way for the user to go through content within an unconstrained container, such as a form on the page itself. The user will go through the content line-by-line, arriving at a call to action at the end.
#  image:
#  caption: Modals and Wizards follow the F Pattern.

related: [Checkbox, radio button]

---
A control that is used to change a setting between two mutually exclusive states.
