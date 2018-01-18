---
title: List menu
layout: design-pattern
category: Navigation
permalink: ui-patterns/navigation/list-menu/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: desktop

what:
 It is a continuous column with rows; each one displaying some details that the users can enlarge (similarly to a springboard) on a detail section or page. In mobile devices, if users want to switch module or go to a different destination, they should retrace some steps and make different choices.

why:
 The user can have an ordered and easy to read overview of different data-related contents, being able to quickly find the information needed.

do: >
 * Clear hierarchy: include a list with detail views.

 * Consider using the Master and detail layout for larger viewports (desktop and tablet).

 * Combine with tab controls to navigate to other sections of the app (for productivity apps).

 * List of items should be concise.

dont: >
 * Do not confuse with a swiping pattern (it does not follow utility pattern).

 * If bigger text or details need to be shown, use cards design pattern instead.

---