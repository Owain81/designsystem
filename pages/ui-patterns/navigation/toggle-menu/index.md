---
title: Toggle menu
layout: design-pattern
category: Navigation
permalink: ui-patterns/navigation/toggle-menu/
design-pattern-type: mobile
design-pattern-video: true

what: >
 A primary or secondary navigation menu, similar to the navigation side drawer, which appears downwards or upwards.

why: >
 To allow navigating to the main categories inside an app or section.
 
do: >
 * The same gesture is used to reveal and to hide the menu.

 * Tapping on the background should hide the menu.

 * Consider including a semi-transparent mask behind.

 * Organise icons and labels to show the contents. Use a panel to include them.

 * Use to inlay or overlay the screen, such as the navigation side drawer.

 * In android use a Spinner, where it’s intended to show views within a category.

 * For customised controls the button should reflect that it’s a menu, for example with a
 <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
 icon.

dont: >
 * Allow the menu to cover the whole screen.

 * Slide from the sides.

Tags: >
 Navigation, menu, contents, hamburger, hidden, primary, settings.

---