---
layout: component
category: components
title: Navigation bar
order: 8
variations: true
modifiers:
 - selector: .c-topbar--fixed
   summary: Topbar can remain in the same position when the page scrolls, adding c-topbar--fixed.
 - selector: .c-topbar--condensed
   summary: Add the modifier class c-topbar--condensed to any topbar to display it with a smaller size.
 - selector: .c-topbar--centered
   summary: The inner content can be centered beyond "x-large" breakpoint using the modifier class c-topbar--centered. This is compatible with all versions (default size and condensed). Topbar tabs will be centered as well.
viewport-switch: true

tabs: true

usage: |
 ## General overview

 A [navigation pattern](../../ui-patterns/navigation/) that allows the user to learn the app structure and navigate within the app main and/or secondary contents.

 {:.alert.alert-info}
 * It can contain tools for general secondary needs.
 * It’s usually combined with a [Navigation side drawer](../../components/navigation-side-drawer/) and [Breadcrumbs](../../components/breadcrumb/) components.
 * In mobile it’s always shown with less options.
 * Navigation bars are anchored to the top of the page at all times.


 Associated patterns: [Navigation]( ../../ui-patterns/navigation/), [Search, sort and filter](../../ui-patterns/search-sort-and-filter/), [Toolbar](../../ui-patterns/tools/toolbar/).
 {:.section-end}

 ## Behaviour

 Navigation bar are static and always placed on top of the interface and can hold different interactive elements that can be selected by clicking, tapping or tabbing and pressing the ‘Enter’ key.

 It can hold different elements:

 {:.table.table--two-columns-25.table--component-usage}
 |Component             |Viewport   |Response    |
 |----------------------|-----------------|--------|
 |Logotype              |<i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-tablet" aria-hidden="true"></i>|Can lead to the home page or be read only.|
 |Toolbar               |<i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Can hold different [icon buttons](../../components/icon-button/), to open a dropdown menu with options, lead to a specific page or action.|
 |Search icon button    |<i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Once selected it opens an input field where the user can type in a query and press ‘enter’ key to find something within the whole sitemap.|
 |Hamburger icon button |<i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Can be embedded to trigger a side navigation drawer, with navigation options. This is very practical for viewports with limited space.|
 |Back arrow button     |<i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Navigate back to the parent or previously visited page.|
 |Page title            |<i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Identifies the current page. Read only.|
 |[Tabs](../../components/tabs/)                  |<i class="fa fa-desktop" aria-hidden="true"></i><i class="fa fa-tablet" aria-hidden="true"></i><i class="fa fa-mobile" aria-hidden="true"></i>|Access page contents in different sibling views. |
 {:.section-end}

do-and-dont:
- title: Do
  text: Organise content by hierarchy, with consistent spacing.
  columns: 6
- title: Don't
  text: Use different spacing between tools on the right.
  columns: 6
- title: Do
  text: Use icons only if these are needed and universal, and text links, try to keep one option per side.
  columns: 6
- title: Don't
  text: Crowd with action links (less is more), specially in mobile devices.
  columns: 6
- title: Do
  text: Keep consistent throughout the application, except in mobile were options depend on context.
  columns: 6
- title: Don't
  text: Use different icons for the same action.
  columns: 6
- title: Do
  text: Keep tools on the right. Use left side for navigation triggers, like the home link.
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

related: [Navigation side drawer, breadcrumb, tabs]

---

A navigation [pattern]({{ site.baseurl }}{% link pages/ui-patterns/navigation/navigation-bar/index.md %}) that allows the user to learn the app structure and navigate within the app main and/or secondary contents. It could also contain tools for general secondary needs.
