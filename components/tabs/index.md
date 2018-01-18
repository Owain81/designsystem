---
layout: component
category: components
title: Tabs
order: 15
variations: true
modifiers:
 - selector: .c-tabs--fixed
   summary: Allows the navigation pattern to be fixed. Mostly used for mobile solutions.

tabs: true

usage: |
 ## General overview

 A navigation pattern that divides the information into different sibling views.

 {:.alert.alert-info}
 * It remains accessible either when scrolling content or switching from tab to tab.
 * Use when users are expected to switch views frequently and they should be highly aware of equally important views.
 * Manage more complex sitemap structure through a left navigation drawer.


 Associated patterns: [Navigation]( ../../ui-patterns/navigation/).
 {:.section-end}

 ## Behaviour

 There are always two or more tabs and only one can be selected. When selected each tab displays a view with contents beneath.

 Users can select each tab by clicking, tapping in touchscreen devices or by keyboard through tabbing and pressing the ‘Enter’ key.

 There are two types of tabs:

 {:.table}
 |Type   |Position  |Multiplicity    |
 |----------|----------------|-------------|
 |Normal  |Can be embedded into a panel or as a page content. These are aligned to the left.|As the number increases/the tabs are squeezed to each other.|
 |Fixed |Remains in the same position on scroll. At large displays, its aligned to the left and in small its distributed to occupy full width (fitted tabs).|In large displays its the same as default. In small displays (below 960px), if there are more than 3 tabs the user can swipe to scroll and reach the rest.  |

 Depending on the screen-size, the quantity of the tabs on view can differ but the **number should be the same within the same app**.
 {:.section-end}


do-and-dont:
- title: Do
  text: Allow navigation by connecting tabs to specific page content; through tab selection or content swiping.
  columns: 6
- title: Don't
  text: Use tab buttons for a specific action (it is not a [toolbar](../../ui-patterns/tools/toolbar/)).
  columns: 6
- title: Do
  text: Generally use clear and short labels to help differentiate the different sections beneath them.
  columns: 6
- title: Avoid
  text: Extremely long tab labels or too long list of tabs.
  columns: 6
- title: Do
  text: Try to use a specific icon and label per tab and be consistent in form and placement.
  columns: 6
- title: Don't
  text: Mix different tab styles - text labels, with icons or icons with label. Switch the positions.
  columns: 6
- title: Don't
  text: Don’t pair tabs with content that also supports swiping.
  columns: 6
- title: Avoid
  text: The need of cross-tab content comparison. Consider placing the content closer together.
  columns: 6
- title: Avoid
  text: Using tabs in cards and modals in general.
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

related: [Navigation bar, Navigation side drawer, Modal]


---
A navigation [pattern]({{ site.baseurl }}{% link pages/ui-patterns/navigation/tabs/index.md %}) that divides the information into different sibling views. It remains accessible either when scrolling content or switching from tab to tab.
