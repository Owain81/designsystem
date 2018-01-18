---
layout: component
category: components
title: Modal
viewport-switch: true

selector: .c-modal
summary: Initializes the modal
order: 11

tabs: true

usage: |
 ## General overview

 Modals are overlays that prevent users from interacting with the rest of the app until an action is taken. They provide information or help a user complete a task.

 {:.alert.alert-info}
 * It should be used thoughtfully and sparingly because they interrupt user workflow, maintaining focus until an action has been taken.
 * Used for catching the user’s full attention to something very important, to grab user input and show additional information and options in context.
 * No other interactions on the main page can be accessed while a modal dialog is active.

 Associated patterns: [Modals]( ../../ui-patterns/navigation/modals/), [Mandatory confirmation](../../ui-patterns/feedback-notifications/confirmation/), [Multi-step / Wizard ](../../ui-patterns/navigation/multistep-wizard/).
 {:.section-end}

 ## Behaviour

 The modal is a dynamic element that appears in a specific situation, usually after a user action (except in the case of timing out sessions).

 Once opened it overlays the page, giving some options or information to the user. It is important to change the keyboard focus to make this component accesible.

 Its can be a container for different components. Here are it’s basic optional contents:

 {:.table.table--first-column-25}
 |Content             |Purpose   |
 |--------------------|-----------------|
 |Mask                |Closes/ resets the modal.   |
 |Header              |Read only. Describes the modal purpose.    |
 |Close button (X)    |Closes/ resets the modal.   |
 |Cancel button       |Closes/ resets the modal.|
 |Confirmation button |Closes the modal and can have different effects; confirmation, lead to a second modal, do a setting etc.|

 All interactive active contents can be selected by clicking, tapping or tabbing and pressing ‘enter key’.

 Modals may also be dismissed by keyboard by pressing the ESC key.
 {:.section-end}

do-and-dont:
- title: Do
  text: Use for mandatory confirmation or permissions (see [confirmation](../../ui-patterns/feedback-notifications/confirmation/)). Always provide a cancel option.
  overlay: true
  columns: 6
- title: Don't
  text: Use to show errors or success messages (in the last case only for [checkouts](../../ui-patterns/forms/checkout/)).
  overlay: true
  columns: 6
- title: Do
  text: Any important information concerning the action should be featured within the overlay.
  overlay: true
  columns: 6
- title: Don't
  text: Avoid to include complex options such as a [multistep](../../ui-patterns/navigation/multistep-wizard/) design pattern.
  overlay: true
  columns: 6
- title: Do
  text: Add a descriptive title. The button that triggers a modal should have a similar name.
  overlay: true
  columns: 6
- title: Don't
  text: Allow users to interact with elements beneath the modal while it’s being displayed.
  columns: 6
- title: Do
  text: Make the window as uncluttered as possible (leave enough white space).
  overlay: true
  columns: 6
- title: Don't
  text: Add too much content and options, specially in mobile.
  overlay: true
  columns: 6
- title: Do
  text: Using the full screen in mobile to greater focus the user’s attention (if there are 2 or more interactions).
  columns: 6
- title: Don't
  text: Make it too big or too small (allow users to see the background context, avoid using more than 50% of the screen).
  overlay: true
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
A navigation [pattern]({{ site.baseurl }}{% link pages/ui-patterns/navigation/modals/index.md %}) consisting of a type of overlay or dialog that blocks and masks the current user page, interrupting the user flow and maintaining focus until an action has been taken.
