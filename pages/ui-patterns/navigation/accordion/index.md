---
title: Accordion
layout: design-pattern
category: Navigation
permalink: ui-patterns/navigation/accordion/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: mobile

what:
 A group of expandable and collapsible panels, each with a header that represents its contents.

why:
 To allow the user, to see in a quick way, more information about one element, without losing the overview and the user’s attention.

do: >
 * Decide if the user wants to have the most important panel open by default.
 
 * Highlight open panels and distinguish them from closed panels.
 
 * Consider adding a dynamic header that changes, depending on the content settings.
 
 * Use for a progressive disclosure content; letting the user expanding the panel for more information.

dont: >
 * Nest it into another accordion.
 
 * Confuse it with a toggle menu, it includes more options or contents.
 
 * Use it as a detailed page option, keep the expand panel small.

---