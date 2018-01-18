---
title: Search form
layout: design-pattern
category: Forms
permalink: ui-patterns/forms/search-form/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: mobile

what:
 Consists of several fields that allow the user to find specific criteria by providing a text to search for.

why:
 To allow the user to find something specific among a large amount of information.

do: >
 * Provide input field big enough for the expected amount of data, with a call to action button.
 
 * Investigate to see if it is worth implementing it together with the autocomplete design pattern. 
 
 * Provide additional controls to refine the search, grouping these according to their functionality.
 
 * Display a set of results of the search the user did.
 
 * Consider allowing the user to save the search.
 
 * In desktop place it where the user expects to find it: the top area of the screen.
 
 * Make the form stand out slightly from the rest of the page (in desktop).
 
 * Use input hints to explain what the user can search for, and give examples.

dont: >
 * Confuse with a filter form, it queries the database, it does not reduce the data of a view.
 
 * Show advanced options by default, only make this expandable if needed.
 
 * Make it very long, try to keep it as short as possible.
 
---