---
title: Fixed column
layout: design-pattern
category: Tables
permalink: ui-patterns/tables/fixed-column/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: mobile

design-pattern-video: true
extra-image-1:

what:
 A viable solution for larger tables. When the user is scrolling, some column stays fixed, keeping it visible. The user can scroll the “not-fixed” columns.

why:
 Keeping one or more important columns fixed on the screen, prevents losing sight of them. This functionality can be helpful for reference and for comparing the information.

do: >
 * Fix the column containing the most important information.

 * Consider letting the user choose which column to fix.

 * Allow swiping or scrolling through the other columns to see other information.

 * Make sure you have valid reasons to make a column fixed for the user.

 * Make minimal graphical differences, to indicate that the column is fixed. 

dont: >
 * Confuse with a basic table which does not combine fixed and non-fixed columns.

 * If you are not sure if a column should be fixed, don’t do it.

---