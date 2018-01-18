---
layout: component
category: components
title: Checkbox
order: 3

tabs: true

usage: |
 ## General overview

 A special button that enables the user to select or deselect a value, usually within a set of options.

 {:.alert.alert-info}
 * Used when the user may select any number of choices, including zero, one, or several.
 * The selected settings do not have inmediate effect, these require confirmation.
 * It should be clear to know what will happen when turning on or off the checkbox, otherwise split it in two radio buttons with different labels.


 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Sort forms](../../ui-patterns/search-sort-and-filter/sort-form/), [Filter drawer](../../ui-patterns/search-sort-and-filter/filter-drawer/).
 {:.section-end}

 ## Behaviour

 Each can be toogled on and off by clicking, tapping in touchscreen devices or by keyboard through tabbing and pressing the ‘Enter’ key. It can be used singularly, like a <switch>, or in groups. Each checkbox is independent of all other checkboxes, so checking one box doesn't uncheck the others

 The selected settings are applicable after a confirmation button is pressed. If the user clicks the Back button, any changes made to checkboxes or radio buttons on the page should be discarded and the original settings reinstated. The same guideline obviously holds if the user clicks a Cancel button (though navigational web pages don't need a cancel option because the Back button serves the same purpose).

 If the user first clicks Back and then Forward, then it's most appropriate to interpret this sequence as an Undo-Redo pair, meaning that the appearance of the controls should show the user's changes as if the user had never clicked Back. These changes should still not take effect on the backend until the user clicks "OK" or an equivalent command.

 Usually the checkboxes are blank by default, so users must actively click to activate it.
 {:.section-end}

do-and-dont:
- title: Do
  text: In groups, allow users to select more than one choice.
  columns: 6
- title: Don't
  text: Use for mutually exclusive options, in that case use a radio button instead.
  columns: 6
- title: Do
  text: Label should be descriptive and positive.
  columns: 6
- title: Don't
  text: Use negative wording that may confuse the user.
  columns: 6
- title: Do
  text: Changed settings should only happen when the user confirms with a command button.
  columns: 6
- title: Don't
  text: Enable something to happen right away, use action buttons or a switch instead.
  columns: 6
- title: Do
  text: Preferentially layout the lists vertically, keeping enough space in between to differentiate.
  columns: 6
- title: Avoid
  text: Displaying options in rows, specially if there isn’t enough space in between.
  columns: 6
- title: Do
  text: Leave the checkboxes blank by default, so users must actively click to activate it.
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

related: [Switch, radio button, range slider]

---
A special button that enables the user to select or deselect a value, usually within a set of options.
