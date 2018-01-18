---
layout: component
category: components
title: Table
order: 16
variations: true
modifiers:
 - selector: .c-table--bordered
   summary: Columns can have a division border.
 - selector: .c-table--condensed
   summary: The table header can be smaller.
 - selector: .c-table--striped
   summary: Rows can have different background colours to enhance readability.
 - selector: .c-table--dark
   summary: The header can be stylised to have a dark background.
 - selector: .c-table--editable
   summary: Cells can be editable. Use .c-table--editable__cell for editable cells, and place an input.c-table--editable__input inside.
 - selector: .c-table--contextual
   summary: Rows can gave different colours depending on the context.
viewport-switch: true


tabs: true

usage: |
 ## General overview

 A pattern type that organises data into rows (items) and columns (items attributes), to make it easier to see relationships and to facilitate understanding.

 {:.alert.alert-info}
 * Allows the user to compare and check different information aspects without losing the big picture.
 * Consider to use different styles: striped, contextual, editable…
 * It’s not useful when user needs to find patterns within the data; use an overview plus data or other chart instead.
 * Also not recommended to use for browsing without knowing exactly what to look for, consider using a list menu instead.

 Associated patterns: [Tables]( ../../ui-patterns/tables/), [List menu](../../ui-patterns/navigation/list-menu/), [Overview plus data](../../ui-patterns/tables/overview-plus-data/).
 {:.section-end}

 ## Variants

 The selection can have immediate effect over a screen element or be a setting for a later confirmation. As for the label, it can be on top or inline with the control.

 There are different variants of the basic table:

 {:.table.table-responsive}
 |Variant   |Characteristic  |Example      |Purpose     |
 |----------|----------------|-------------|------------|
 |Bordered  |Division border between columns.                 |![Bordered](../../images/components/table/Bordered.svg)|Enhance item attributes distinction. |
 |Condensed |Header is smaller than the default one.          |![Condensed](../../images/components/table/Condensed.svg)|Show larger amounts of data (not default).|
 |Stripped  |Rows with alternate background colours.          |![Stripped](../../images/components/table/Stripped.svg)|Enhance readability for very long list of information.|
 |Contextual|Rows with different background colours.          |![Contextual](../../images/components/table/Contextual.svg) |Distinguish a specific row status.|
 |Editable  |Some cells contents can be selected and modified.|![Editable](../../images/components/table/Editable.svg)|Allow the user to edit and enter data.|
 {:.section-end}

 ## Behaviour

 Basic tables and most of it’s variants are read only. Editable tables variants allow the user to enter and edit text through a physical or virtual keyboard. Cells can be updated by clicking, tapping or tabbing, and writing the desired values.

 **Placement**  
 A table can be put inside a panel, but it already has a panel-style border itself.

 **Content alignment**  
 Always maintain consistency within the same column. If the column contains words, align to the left, if it contains numbers to the right.
 {:.section-end}

do-and-dont:
- title: Consider
  text: Using it together with a graph (Overview plus data design pattern).
  columns: 6
- title: Avoid
  text: Adding extra noise by presenting many icons and/ or using the bordered variant.
  columns: 6
- title: Do
  text: Reduce the number of columns presented in small viewports.
  columns: 6
- title: Don't
  text: Show too much information to fit on a single screen (consider a [drill down pattern](../../ui-patterns/charts/drill-down/) instead).
  columns: 6
- title: Do
  text: For editable tables, provide confirmation feedback on form save.
  columns: 6
- title: Avoid
  text: Provide confirmation feedback with each change, unless the change prompts an error message.
  columns: 6
- title: Do
  text: If there is a specific format for the cell, offer an appropriate editor (selector, date picker etc.).
  columns: 6
- title: Don't
  text: Using complex editable tables in mobile, (in that case consider data entry separately from the cell).
  columns: 6
- title: Do
  text: Alternate colours on rows (stripped table variant) to enhance readability and guide throughout the data.
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

related: [Button, dropdown input, file input, panel, modal, range slider, text input, text area]

---
A pattern type that organises data into rows (items) and columns (items attributes), allowing the user to compare and check different information aspects without losing the big picture.
