---
layout: component
category: components
title: Breadcrumb
order: 1
tabs: true

usage: |
 ## General overview

 A description of the users’ location in a website or application, combined with links that allow them to navigate to a parent level.

 {:.alert.alert-info}
 * Used when the information architecture follows a strict hierarchical structure or when the user landed from an external source.
 * Takes up minimal space and not everyone use it.
 * Helps to learn better the structure of the website than a menu, being a great source of contextual information.
 * Used for pages which are deep into the hierarchy, and no other form of navigations can show the details of the same deep level.
 * Not usable for single-level websites that don't have a logical hierarchy or grouping.

 Associated patterns: [Navigation]( ../../ui-patterns/navigation/).
 {:.section-end}

 ## Behaviour

 The structure obeys hierarchy, from parent to child, displaying the different names of the pages behind the actual one.

 The current page and the separators aren’t interactive, but previous pages names are links that can be clicked, tapped in touchscreen devices or accesed by keyboard through tabbing and pressing the ‘Enter’ key.

 Once selected a link the corresponding page is loaded.
 {:.section-end}

 ## Placement

 Breadcrumbs should appear near the top-left of the page, above the page title.
 {:.section-end}

do-and-dont:
- title: Do
  text: Show hierarchy from the top to the lowest, current level.
  columns: 6
- title: Don't
  text: Show history, mixing levels without a hierarchical order.
  columns: 6
- title: Do
  text: Display it for sites with sections and subsections.
  columns: 6
- title: Avoid
  text: Use in the topmost level of hierarchy (home or welcome page usually).
  columns: 6
- title: Do
  text: Combine with some sort of main navigation.
  columns: 6
- title: Don't
  text: Provide as the main navigation of the website.
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

related: [Navigation bar, Navigation side drawer]

---
A series of links that reveals the user’s location in a website or application, allowing them to navigate back to the previous pages.
