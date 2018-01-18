---
layout: component
category: components
title: Button
selector: .o-btn
summary: Initializes a button
order: 2
variations: true
modifiers:
 - selector: .o-btn--happy
   summary: Button can be a call to action.
 - selector: .o-btn--negative
   summary: Button can be used for negative actions such as deleting.
 - selector: .o-btn--positive
   summary: Button can be used for confirmation or positive actions.
tabs: true

usage: |
 ## General overview

 Buttons are used as triggers for actions. They should rarely, if ever, be used for navigation. Instead use Links because it takes users to a new page and is not associated with actions.

 {:.alert.alert-info}
 * Actions are operations that are performed on objects.
 * Navigation changes the screen or view or takes you to another context in the application.

 To make different actions clear and possible to distinguish from each other we have different types of buttons. Button size, colours, labels and location varies with the purpose and importance they have in relation to the task. Buttons are one of the most important signals to the users according to how to complete the task and should be used consistently. What actions the user can perform varies per actual workflow. Each page might have one or two primary buttons. Any remaining call-to-action are represented as secondary (default).

 Associated patterns: [Call to action]( ../../ui-patterns/tools/call-to-action-button/), [Forms]( ../../ui-patterns/forms/), [Tools]( ../../ui-patterns/tools/).
 {:.section-end}

 ## Behaviour

 {:.table.table--first-column-25}
 |BUTTON TYPE           |PURPOSE                   |
 |----------------------|--------------------------|
 |**Default buttons**   |Used for secondary and frequently used actions that compliments a primary action. They also reduce visual noise when there are many action of equal importance on the page.|
 |**Default buttons**   |Used as the happy path action. This is a strong [call to action]( ../../ui-patterns/tools/call-to-action-button/) and is always the first button in the action panel.|
 |**Primary positive**  |These buttons are used to highlight a positive action when it’s important that the user is notified. Used as [call to action]( ../../ui-patterns/tools/call-to-action-button/) for confirmation for [checkouts](../../ui-patterns/forms/checkout/).|
 |**Primary negative**  |Negative buttons let the user know that a negative action is going to happen. |

 **Button selection**  
 The user can select a button in two ways:
 *	By clicking it or tapping in touchscreen devices.
 *	By tabbing to it and the pressing the 'Enter' key.
 {:.section-end}

 ## FAQ

 {:.alert.alert-warning}
 **If I have two buttons in an overlay, neither of which are the most important action for the user. Which one should be Happy?**  
 None. Happy button is not necessary (although it should be obvious to the user what they should do next).

 {:.alert.alert-warning}
 **If have a small amount of available space and I need several buttons next to each other. Can I drop the labels?**  
 You can use icon only buttons and icon only entity action buttons, however these should be used sparingly and where the icon is reasonably obvious (for example the cog or add icons). Using a label and icon is preferred over using an icon alone.
 {:.section-end}

do-and-dont:
- title: Do
  text: Button titles should be as simple as possible, but not simpler. Try not to use more than two/three words.
  columns: 6
- title: Don't
  text: Users shouldn’t have to read anything else to understand the label.
  columns: 6
- title: Do
  text: Use descriptive language on buttons relating to the user’s intent. Generally use verbs that describes the call to action.
  columns: 6
- title: Don't
  text: Use generic language not related to the action and not relating to the intent of the user.
  columns: 6
- title: Do
  text: Use space proximity for those related buttons/actions.
  columns: 6
- title: Don't
  text: Use to many buttons, cluttering the space.
  columns: 6
- title: Do
  text: Make it flow-specific and screen-specific.
  columns: 6
- title: Don't
  text: Use more than one call to action button per type on a screen for minor actions.
  columns: 6
- title: Do
  text: Embed if necessary in a toolbar/navigation bar.
  columns: 6
- title: Do
  text: When using several, place them in sequential order according to the user flow.
  columns: 6
- title: Do
  text: Call to actions should be used only for user’s primary choice and when neccesary.
  columns: 6


placement:
- title: Z Pattern
  text: The Z-pattern is a natural way for the user to go through content within a constrained container and when tasks are oriented from the top-left and ending with a primary call to action on the right bottom side of the container.
- title: F Pattern
  text: The F-pattern is a natural way to go through content in an unconstrained container, such as a form on the page itself. The user will go through the content line-by-line, arriving at a call to action at the end.

related: [Checkbox, dropdown input, icon button, navigation bar, navigation side drawer, modal, radio button, range slider, switch]
---
Interactive elements which allow the users to carry out a specific action.
