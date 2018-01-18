---
layout: component
category: components
title: Icon button
order: 6
variations: true
modifiers:
 - selector: .o-btn--happy
   summary: A standard button with icon.
 - selector: .o-btn-icon--transparent
   summary: The button background can be transparent.

tabs: true

usage: |
 ## General overview

 Buttons are used to initialise an action. Button icons help speed up cognition of the UI and the task the user has to perform. Our goal is to use icons carefully and sparingly. Icons should be distinct and informative.

 We have Icons with border and without border for different needs.

 Associated patterns: [Navigation]( ../../ui-patterns/navigation/), [Forms]( ../../ui-patterns/forms/), [Tools]( ../../ui-patterns/tools/).
 {:.section-end}

 ## Behaviour

 There are 2 different variations of button icon behaviour:

 {:.table}
 |BUTTON TYPE|BEHAVIOUR|
 |---|---|
 |**Default behaviour**|Simple click functionality, no select/toggle possibility|
 |**Toggle behaviour** |The button icon can be selected/toggled. The button will keep the selected state (until toggled off).|

 The user can select a button in two ways
 * By clicking it or tapping in touchscreen devices.
 * By tabbing to it and the pressing the 'Enter' key
 {:.section-end}

do-and-dont:
- title: Do
  text: Mix similar styled icon buttons together to suit the solution’s needs.
  columns: 6
- title: Don't
  text: Mix differently types of icon buttons together, like with border and without.
  columns: 6
- title: Do
  text: Always combine with a label unless the icon is universal.
  columns: 6
- title: Don't
  text: Overuse cluttering the space.
  columns: 6
- title: Do
  text: Use icon buttons with border for cases which the button should stand out.
  columns: 6
- title: Don't
  text: Use with border on [navigation bars](../../components/navigation-bar/) or [side drawers](../../components/navigation-side-drawer/).
  columns: 6
- title: Do
  text: Be consistent with the icon usage within the app.
  columns: 6
- title: Don't
  text: Use different icons for the same action.
  columns: 6
- title: Don't
  text: Embed Button icons for actions in a tab. For navigation use Tabs with icons.
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

related: [Button, file input]

---
A kind of [button]({{ site.baseurl }}{% link components/button/index.md %}) with an icon that symbolises it’s action.
