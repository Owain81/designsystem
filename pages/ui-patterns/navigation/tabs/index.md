---
title: Tabs
layout: design-pattern
category: Navigation
permalink: ui-patterns/navigation/tabs/
design-pattern-type: mobile
extra-video-1: design-pattern-video-scrollable-tabs.mp4

what:
 Navigation pattern that divides the information into different sibling views. It remains accessible either when scrolling content or switching from tab to tab.

why:
 In some contexts, the users are expected to switch views frequently and they should be highly aware of the alternate views.

do: >
 * Try to use an icon and label per tab and always be consistent in form and placement.

 * Allow navigation by connecting tabs to specific page content; through tab selection or content swiping.

 * Highlight the tab selected.

 * Depending on the screen-size, the quantity of the tabs can differ but the number should be the same within the same app.
 
 * Generally use a limited number of tabs with equal width, and short labels (fixed tabs).
 
 * Consider pushing the tabs limit by squeezing in several tabs.
 
 * Consider making tabs scrollable, in order to use a larger number of tabs and/or longer tab titles.
 
 * Consider using OS based tabs styles for navigation tabs: like app tabs for Windows.

dont: >
 * Use tab buttons for a specific action (it is not a toolbar).

 * Disconnect tab from its content (physically).
 
 * Present tabs in different rows.
 
 * Add nested sub-tabs.
 
 * Don’t pair tabs with content that also supports swiping.
 
 * Use comparison of content across tabs, the displayed information should be exclusive.

---