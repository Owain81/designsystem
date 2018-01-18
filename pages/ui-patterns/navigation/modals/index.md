---
title: Modals
layout: design-pattern
category: Navigation
permalink: ui-patterns/navigation/modals/
design-pattern-type: desktop


what: >
 A type of overlay or dialog that blocks and masks the current user page, interrupting the user flow and maintaining focus until an action has been taken.

why: >
 To catch the user’s full attention to something very important, to grab user input, show additional information and options in context, for progressive disclosure.

do: >
 * Display as a panel with a transparent layer behind, which overlays the current page.

 * In mobile, consider using the full screen to greater focus the user’s attention.

 * Make the panel as uncluttered as possible.

 * Add a descriptive title. The button that triggers a modal should have a similar name.

 * Allow the users to quit it through for example a close, cancel button or pressing 'Escape' key.

 * Any important information concerning the action should be featured within the overlay.

 * Use for mandatory confirmation or permissions (see its recommendations).

dont: >
 * Allow users to interact outside the modal while it’s being displayed.

 * Make it too big or too small (allow users to see the background context, avoid using more than 50% of the screen).

 * Use to show errors (see error notification) or success messages.

 * Avoid suddenly opening it, unless it is a reaction to a user’s action (except for timing out sessions).

 * Include complex options such as a multistep design pattern.

 * Not change the keyboard focus and make this pattern un-accessible.

tags: >
 Information, user guide, overlay, balloon, avoid friction, message, success, confirmation, pop up.

---
