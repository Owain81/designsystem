---
title: Confirmation
layout: design-pattern-variations
category: Feedback/notifications
permalink: ui-patterns/feedback-notifications/confirmation/
order: 1

design-pattern-type: mobile

what:
 An element reflecting the system reaction after a user action. It can either be a passive element or conceived as a mandatory step.

title-variation-1: Passive confirmation

what-variation-1: >
 A text message, multi-state button, animation, or graphic representation which confirms the operation that the user just did.

why-variation-1: >
 To confirm the implicit operation that the system has taken, regarding a user’s choice.

do-variation-1: >
 * Outstand it from therest of the interface elements.

 * Use as a dynamic element.

 * Should appear quickly after the action.

 * Consider to pair it with an undo button.
 
 * Pick the most appropriate tool: multi-state button, toast notification, animation...

dont-variation-1: >
 * Disrupt the user flow: except when a very important action was done, like a transaction.

 * Use only colour for this kind of feedback, as it is not accessible. 

title-variation-2: Mandatory confirmation
 
what-variation-2: >
  A question to the users to verify that they really do want to proceed with the action they just initiated.

why-variation-2: >
  To allow users to understand the consequences of their actions, and to have the choice to either accept or reject that action.
 
do-variation-2: >
  * Ask for a second interaction to complete a user action.

  * Talk to the user in a direct way: clearly indicate the action and its consequences, if these are big.

  * Consider using a modal design pattern and/or pairing it with a warning.

  * Use a call to action (preferably no more than 1).

dont-variation-2: >
 * Use very often within the application, over-warning.

 * Use many consecutively.

 * Use when consequences of an action are reversible or negligible.

 * Confuse with a validation (it is not an error message or passive confirmation).

tags: >
 Tip, help, learn, information, user guide, overlay, balloon, avoid friction, modal, message.

---