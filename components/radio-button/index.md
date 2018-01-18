---
layout: component
category: components
title: Radio button
order: 12

tabs: true

usage: |
 ## General overview

 A button for selecting values within a set of visible options, always with one option selected.

 {:.alert.alert-info}
 * Used when there are lists of mutually exclusive options: selecting one deselects the other.
 * Preferable to [dropdown inputs](../../components/dropdown-input/) to reduce cognitive load, except if there are more than 6 options and/or space is limited.
 * Always used together with a label.


 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Sort form](../../ui-patterns/search-sort-and-filter/sort-form/), [Filter drawer](../../ui-patterns/search-sort-and-filter/filter-overlay/).
 {:.section-end}

 ## Behaviour

 These are always used in groups of two or more radio buttons, where there is always one option selected. Each checkbox is mutually exclusive to its group, so selecting one, unselects the others.

 Each can be selected by clicking, tapping in touchscreen devices or by keyboard through tabbing and pressing the ‘Enter’ key.

 The selected settings are applicable after a confirmation button is pressed. If the user clicks the Back button, any changes made to radio buttons on the page should be discarded and the original settings reinstated. The same guideline obviously holds if the user clicks a Cancel button (though navigational web pages don't need a cancel option because the Back button serves the same purpose).

 If the user first clicks Back and then Forward, then it's most appropriate to interpret this sequence as an Undo-Redo pair, meaning that the appearance of the controls should show the user's changes as if the user had never clicked Back. These changes should still not take effect on the backend until the user clicks "OK" or an equivalent command.

 There is always one radio button selected by default, so users aren’t forced to interact with it.
 {:.section-end}

do-and-dont:
- title: Do
  text: Use in group, for mutually exclusive options.
  columns: 6
- title: Don't
  text: Allow users to select more than one choice, in that case use a [checkbox](../../components/checkbox/) instead.
  columns: 6
- title: Do
  text: Label should be descriptive and exclusive from each other.
  columns: 6
- title: Don't
  text: Use one single radio button. These cannot be toggled individually.
  columns: 6
- title: Do
  text: Changed settings should only happen when the user confirms with a command button.
  columns: 6
- title: Don't
  text: Enable something to happen right away, use action [buttons](../../components/button/) or a [switch](../../components/switch/) instead.
  columns: 6
- title: Do
  text: Preferentially layout the lists vertically, keeping enough space in between to differentiate.
  columns: 6
- title: Avoid
  text: Displaying options in rows, specially if there isn’t enough space in between and the list is long.
  columns: 6
- title: Do
  text: Mark one option by default, so users can use default settings.
  columns: 6
- title: Don't
  text: Leave or allow to leave all buttons unchecked.
  columns: 6
- title: Do
  text: Consider to add an option where the user can fill an individual choice.
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

related: [Switch, Checkbox, Range slider, Dropdown input]

---
A special button for selecting values within a set of exclusive options, always with one option selected.
