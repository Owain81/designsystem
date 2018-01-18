---
layout: component
category: components
title: Panel
order: 10
variations: true
modifiers:
 - selector: .c-panel--noheader
   summary: Initiates a panel without header style
 - selector: .c-panel--child
   summary: Only to be used when a panel needs to be inside a panel
viewport-switch: true

tabs: true

usage: |
 ## General overview

 A box containing several areas of data that have some relation with each other, usually described under a title.

 {:.alert.alert-info}
 * Use for making big distinctive groups within a interface.
 * Can be combined with [tabs](../../components/tabs/) and hold different components and functions.

 Associated patterns: [Navigation]( ../../ui-patterns/navigation/), [Charts](../../ui-patterns/charts/), [Forms](../../ui-patterns/forms/), [Tables](../../ui-patterns/tables/), [Tools](../../ui-patterns/tools/).
 {:.section-end}

 ## Behaviour

 The panel acts a container of different functions and components, here are it’s basic optional contents:

 {:.table.table--first-column-25}
 |Content              |Purpose   |
 |---------------------|----------|
 |Header               |Describe the panel purpose. Read only.|
 |Subpanel (s)         |Divide the intern contents into more groups.|
 |Icon button on header|Carry out an action. Often used a pen icon button to make the panel contents editable.|
 |Footer               |Contains buttons to carry out actions related to all panel contents.|

 All interactive active contents can be selected by clicking, tapping or tabbing and pressing ‘enter key’.
 {:.section-end}

do-and-dont:
- title: Do
  text: Use for grouping related components or information.
  columns: 6
- title: Avoid
  text: Using it to hold few contents, that can be grouped with headings.
  columns: 6
- title: Do
  text: Make the panel as organised and uncluttered as possible (leave enough white space).
  columns: 6
- title: Avoid
  text: Adding sub-panels (in case of need use rich headings with spacing or dividers for subgroups).
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

related: [Modal, button, dropdown input, icon button, file input, radio button, range slider, switch, tabs, table, text area, text input]

---
A box containing several areas of data that have some relation with each other, usually described under a title.
