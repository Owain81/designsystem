---
title: Editable table
layout: design-pattern
category: Tables
permalink: ui-patterns/tables/editable-table/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: desktop

extra-image-1:

what:
 A table that organises data into rows (items) and columns (items attributes), allowing the user to select a cell and edit it (inline edition).

why:
 For users to be able to easily scan, compare, sort and edit data in a table by selecting a cell, without losing the big picture.

do: >
 * Clearly indicate cell and/or row selected.

 * If there is a specific format for the cell, offer an appropriate editor.

 * Be consistent on content alignment inside a column.

 * Enable the tab function from cell to cell in desktop.
 
 * In mobile consider data entry separately from the cell.

dont: >
 * Not necessary to provide confirmation feedback with each change, unless the change prompts an error message; otherwise, provide confirmation just on save.

 * Use for extensive data entry on mobile devices.
 
 * Use to find patterns within a data set. Consider a line chart or bar chart.
 
 * Use for browsing without knowing exactly what to look for (consider to use a list menu instead).

---