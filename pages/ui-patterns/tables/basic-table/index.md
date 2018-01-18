---
title: Basic table
layout: design-pattern
category: Tables
permalink: ui-patterns/tables/basic-table/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: desktop

extra-image-1:

what:
 A grid with data consisting of columns and rows with column headers.

why:
 To allow the user to compare and review different data in a structured way.

do: >
 * Avoid using dark gridlines.
 
 * Left-align text and right-align numbers (align headers in the same way as their content).
 
 * When used, make headers more prominent than the rest of the table.
 
 * Alternate table row colours, also called zebra striping, or place a thin horizontal line between rows to enhance readability.
 
 * Consider an alternate pattern if there is too much information on a single screen. 

dont: >
 * Confuse with a List menu, as it is not providing a detail view.
 
 * Use when user needs to find patterns within the data; use an overview plus data or a chart instead.
 
 * Use to allow browsing the data without knowing what to look for, consider using a list view. 
 
 * Use for extensive data on mobile devices (consider using fixed columns instead).


---