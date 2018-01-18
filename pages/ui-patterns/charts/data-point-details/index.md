---
title: Data point details
layout: design-pattern
category: Charts
permalink: ui-patterns/charts/data-point-details/
design-pattern-type: mobile

what: >
 When a user interacts with a chart, within the same window, the system responds by displaying details regarding that area of the chart.

why: >
 The user needs to see more details about a specific point of a chart without losing the general overview, or being distracted by other point details.

do: >
 * Allow the user to hover over a chart point.

 * In mobile, when data points are tapped, provide the additional information users want.

dont: >
 * Confuse with a filtering chart, it does not allow to filter the information, just enlarge it a bit.

 * Confuse with the drill down pattern, it does not display information in a separate window.

 * Use for large amounts of details, in that case use drill down instead.

---