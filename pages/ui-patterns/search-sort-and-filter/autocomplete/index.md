---
title: Autocomplete
layout: design-pattern
category: Search, sort and filter
permalink: ui-patterns/search-sort-and-filter/autocomplete/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: mobile

what:
 As users start typing a text in a box to make a search or fill in a form, a set of sorted suggestions appear. The user can select one of the options and submit it or keep typing.

why:
 Enable the user to enter data in a field more quickly without having to spell correctly, remember or type more than necessary.

do: >
 * Give options based on entered letters (filter).

 * Give options based on user history.

 * Options should be displayed immediately, otherwise use a progress indicator to give feedback.

 * Give some possible categories for each suggestion.

dont: >
 * Maintain the suggested options when the field is not selected (out of focus).

---