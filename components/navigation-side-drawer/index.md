---
layout: component
category: components
title: Navigation side drawer
order: 9

tabs: true

usage: |
 ## General overview

 A [navigation pattern](../../ui-patterns/navigation/) consisting of a drawer that appears on the side offering links to the main and/or secondary contents of the app. It could contain tools for general secondary needs, such as profile information.

 {:.alert.alert-info}
 * Allows the user to understand the app structure and access its contents, while saving space and keeping the users focus on the screen.
 * It can be combined with a [Navigation bar](../../components/navigation-bar/) and [Breadcrumbs](../../components/breadcrumb/) components.

 Associated patterns: [Navigation]( ../../ui-patterns/navigation/), [Search, sort and filter](../../ui-patterns/search-sort-and-filter/), [Toolbar](../../ui-patterns/tools/toolbar/), [Call to action button](../../ui-patterns/tools/call-to-action-button/).
 {:.section-end}

 ## Behaviour

 Side navigation drawer is dynamic and can be opened or closed by clicking, tapping or tabbing and pressing the ‘Enter’ key on a <i class="fa fa-fw fa-bars" aria-hidden="true"></i> [icon button](../../components/icon-button/).

 Once opened the user can repeat the interaction over one of the menu items to navigate to the selected section.

 It has a different open/closed states depending on the viewport:

 {:.table.table--two-columns-25.table--component-usage}
 |Version               |Viewport   |Response    |
 |----------------------|-----------------|--------|
 |Overlay side drawer   |<i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true">|The drawer is off canvas (hidden) and overlaps the screen to the right when triggered.|
 |Mini side drawer      |<i class="fa fa-desktop" aria-hidden="true"></i>|The drawer collapses and expands, appearing as an inlay side drawer that contracts the page on the right.    |
 {:.section-end}

do-and-dont:
- title: Do
  text: Organise content by hierarchy, show primary options first and foremost.
  columns: 6
- title: Don't
  text: Overload it with too many features.
  columns: 6
- title: Do
  text: Use meaningful icons and labels to identify each navigation option.
  columns: 6
- title: Don't
  text: Use the same icon for different menu items.
  columns: 6
- title: Do
  text: Use the mini side drawer for sections in which users need quick selection access alongside content.
  columns: 6
- title: Avoid
  text: Displaying many icons on the mini side drawer closed version.
  columns: 6
- title: Consider
  text: Opening the side drawer the first time the app is opened.
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

related: [Navigation bar, breadcrumb, icon button]

---
A navigation [pattern]({{ site.baseurl }}{% link pages/ui-patterns/navigation/navigation-side-drawer/index.md %}) consisting of a drawer that appears on the side offering links to the main and/or secondary contents of the app. It could contain tools for general secondary needs, such as profile information.
