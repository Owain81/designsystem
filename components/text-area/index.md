---
layout: component
category: components
title: Text area
order: 17
additional-description: >
 ## Additional functionalities

 1. Autoheight adaptation depending on the content.

 2. Text counter using the textarea property data-maxchars="200".


tabs: true

usage: |
 ## General overview

 A control that allows users to type in information in forms.

 {:.alert.alert-info}
 * Useful to input unconstrained long text, such as messages or descriptions.
 * Has a default character limitation of 200 characters, it can be configured.
 * Since possible inputs are wide, it requires more knowledge to use it and are more error-prone than other input controls.
 * Only use them if these are really needed.
 * Control width can be variated to suggest maximum input size, also the height.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Feedback / notifications](../../ui-patterns/feedback-notifications/).
 {:.section-end}

 ## Behaviour

 The field is accessible through clicking (or tapping/ tabbing). It can be set to be on focus on page load to invite the user to start the interaction.

 Typing text is accessible through a physical or virtual keyboard. For this last one, the input selector can display different options: letters, numbers, dates etc. This text is accessible and editable, later on in different ways depending on the OS or viewport.

 **Character counter**  
 Text area has a default character counter that can be removed. Initial maximum is 200 characters; this number can be adapted depending on the needs. When text length approaches the maximum a warning validation is displayed, when having reached it, an error is shown.

 **Validations**  
 As previously mentioned, text areas are quite error prone, therefore usually need to provide the user inline feedback:

 ![Warning text area](../../images/components/text-area/Warning.svg){:.mr-64}
 ![Alert text area](../../images/components/text-area/Error.svg)
 ![Success text area](../../images/components/text-area/Success.svg)

 **Field height**  
 As the user types in and content goes beyond the field limits, the text jumps to the second line and the field height expands. It is possible to preset the text area so that it shows a fixed number of rows to entice the desirable number of characters.

 **Submission**  
 As part of a form, text inputs can be saved or submitted with a save or confirmation button (usually happy [button](../../components/button/)) variant. For small forms, such a sign in, these can be set up, so that it is possible to send changes by pressing the ‘enter key’ or an equivalent mobile command.

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
  text: When most of the fields in a form are mandatory, mark only optional fields with a label (and vice versa).
  columns: 6
- title: Avoid
  text: Denote mandatory fields when the majority of the fields in a form is mandatory (and vice versa).
  columns: 6
- title: Do
  text: Use for inputs with a considerable length, at least one sentence.
  columns: 6
- title: Don't
  text: Use for short inputs, like e-mail, names, phones etc. (use other components such as [text input](../../components/text-input/) or [dropdown input](../../components/dropdown-input/)).
  columns: 6
- title: Consider
  text: Use the placeholder to guide the user and explain the label better.
  columns: 6
- title: Don't
  text: Use an inline label.
  columns: 6
- title: Consider
  text: Configure auto-capitalisation of the first letter if the expected answer is a sentence.
  columns: 6
- title: Avoid
  text: Autocorrect (word spelling), it works badly for names, addresses and email addresses.
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

#placement:
#- title: Z Pattern
#  text: The Z-pattern is a natural way for the user to go through content within a constrained container and when tasks are oriented from the top-left and ending with a primary call to action on the right bottom side of the container.
#  image:
#  caption: Modals and Wizards follow the Z Pattern.
#- title: F Pattern
#  text: The F-pattern is a natural way for the user to go through content within an unconstrained container, such as a form on the page itself. The user will go through the content line-by-line, arriving at a call to action at the end.
#  image:
#  caption: Modals and Wizards follow the F Pattern.

related: [Dropdown input, file input, table, text input]


---
A control that allows users to type in large amounts of information, up to maximum number of characters.
