---
layout: component
category: components
title: Range slider
order: 13

tabs: true

usage: |
 ## General overview

 A special button to let the user select a value or range from a fixed set of options.

 {:.alert.alert-info}
 * Work best when there are lists of few average values or ranges.
 * For many specific values other input controls are preferable such as [dropdown inputs](../../components/dropdown-input/) or [text inputs](../../components/text-input/).
 * This control is quite complex to use and might involve accessibility issues, so it’s important to read carefully this usage page.
 * Often used as forms inputs but also for interactive previews or timelines.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Search, sort and filter](../../ui-patterns/search-sort-and-filter/), [interactive timeline](../../ui-patterns/charts/interactive-timeline/), [interactive preview](../../ui-patterns/charts/interactive-preview/).
 {:.section-end}

 ## Behaviour

 Values within the slider can be selected either tapping or clicking on the range bar, or dragging the slider ball to a side.

 Through keyboard users can access it by tabbing and pressing the right left/ arrows.

 **The wider or the denser the range selectable through a slider, the harder it is to select a precise value ([steering law](https://en.wikipedia.org/wiki/Steering_law)).**
 {:.section-end}

do-and-dont:
- title: Do
  text: Provide a label on the top or beside the control to describe the selected value or range.
  columns: 6
- title: Don't
  text: Place the label for the selected value under the knob, as it has low visibility in mobile.
  columns: 6
- title: Do
  text: Use for limited numeric values, otherwise use other input controls, such as [radio buttons](../../components/radio-button/).
  columns: 6
- title: Don't
  text: Make too long, displaying too many, precise, input options.
  columns: 6
- title: Do
  text: In mobile, leave enough space around the control to enhance usability.
  columns: 6
- title: Don't
  text: Overuse, this control is quite complex to use and might involve accessibility issues.
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

related: [Switch, Radio button, Dropdown input]

---
A special button to let the user select a value or range from a fixed set of options.
