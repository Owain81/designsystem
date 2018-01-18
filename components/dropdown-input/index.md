---
layout: component
category: components
title:  Dropdown input
order: 4

tabs: true

usage: |
 ## General overview

 A button within a form that overlays a list of multiple and mutually exclusive options to choose from.

 {:.alert.alert-info}
 * It is used as a type of form input, requiring confirmation.
 * Need to be labelled clearly and keep the label or description visible when activated.
 * Can be combined with a text input with an autocomplete pattern to make easier to select within big amount of options.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Search, sort and filter](../../ui-patterns/search-sort-and-filter/).
 {:.section-end}

 ## Behaviour

 The control has two main states, open and closed; and several mutually exclusive input options.

 Users can open the control to display an overlay with the options by clicking, tapping or accessing the the dropdown through tabbing and  pressing the ‘enter’ key. Next, they can repeat the action and select the desired result, which immediately closes the overlay and updates the input, displaying it in the closed state and marking it within the opened state.

 The possible options have a default alphabetical order. Through keyboard, users can type the initial to get directly to the options beginning with that letter.
 {:.section-end}

do-and-dont:
- title: Do
  text: Label clearly the description and options and keep the description always visible.
  columns: 6
- title: Don't
  text: Use when typing is faster, or options are highly familiar to users (use [text input](../../components/text-input/) instead).
  columns: 6
- title: Do
  text: Usually disable unavailable options
  columns: 6
- title: Don't
  text: Remove unavailable options.
  columns: 6
- title: Do
  text: Use for cases with 4 or more options and when you need to save space, otherwise use [radio buttons](../../components/radio-button/).
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

related: [Radio button, text input, range slider]

---
A button within a form that overlays a list of multiple and mutually exclusive options to choose.
