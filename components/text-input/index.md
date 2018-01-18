---
layout: component
category: components
title: Text input
order: 18

tabs: true

usage: |
 ## General overview

 A control that allows users to type in information in forms.

 {:.alert.alert-info}
 * Useful to input unconstrained short text, such as names and addresses.
 * Do not have a default character limitation, but it can be configured.
 * Since possible inputs are wide, it requires more knowledge to use it and are more error-prone than other input controls.
 * Only use them if these are really needed.
 * Control width can be variated to suggest maximum input size.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Table]( ../../ui-patterns/tables/), [Feedback / notifications](../../ui-patterns/feedback-notifications/).
 {:.section-end}

 ## Behaviour

 The field is accessible through clicking (or tapping/ tabbing). It can be set to be on focus on page load to invite the user to start the interaction.

 Typing text is accessible through a physical or virtual keyboard. For this last one, the input selector can display different options: letters, numbers, dates etc.

 As the user types in and content goes beyond the field limits, the text in the beginning goes hidden. This text is accessible and editable, later on in different ways depending on the OS or viewport.

 **Validations**  
 As previously mentioned, text inputs are quite error prone, therefore usually need to provide the user inline feedback:

 ![Warning text area](../../images/components/text-input/Warning.svg){:.mr-64}
 ![Alert text area](../../images/components/text-input/Error.svg)
 ![Success text area](../../images/components/text-input/Success.svg)

 **Submission**  
 As part of a form, text inputs can be saved or submitted with a save or confirmation button (usually happy button) variant. For small forms, such a sign in, these can be set up, so that it is possible to send changes by pressing the ‘enter key’ or an equivalent mobile command.

 If the user first clicks Back and then Forward, then it's most appropriate to interpret this sequence as an Undo-Redo pair, meaning that the appearance of the controls should show the user's changes as if the user had never clicked Back.
 {:.section-end}


do-and-dont:
- title: Do
  text: Use short natural labels, fast to read and to understand.
  columns: 6
- title: Avoid
  text: Using more than two words on the label.
  columns: 6
- title: Do
  text: Denote optional fields with a (optional) label.
  columns: 6
- title: Don't
  text: Denote mandatory fields.
  columns: 6
- title: Consider
  text: Adding suggestions of [autocomplete](../../ui-patterns/search-sort-and-filter/autocomplete/) based on the first letters typed.
  columns: 6
- title: Don't
  text: Autocorrect (word spelling) for names, addresses and email addresses.
  columns: 6
- title: Consider
  text: Providing basic help text (text with description).
  columns: 6
- title: Don't
  text: Inline label styles, specially on mobile.
  columns: 6
- title: Do
  text: Provide instant inline validation feedback, it’s recommended to describe the problem.
  columns: 6
- title: Don't
  text: Trigger validation feedback only after confirmation.
  columns: 6
- title: Do
  text: In mobile, offer an appropriate editor to cover the specific format.
  columns: 6
- title: Don't
  text: Use the wrong selector for a format in mobile (think which one is faster and easier to use).
  columns: 6
- title: Consider
  text: Filling it by default following the most frequent or recent input, also the connecting pattern.
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

related: [Dropdown input, file input, table, text area]


---
A control that allows users to type in information.
