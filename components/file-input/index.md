---
layout: component
category: components
title: File input
order: 5

tabs: true

usage: |
 ## General overview

 A kind of form input that provides a button to enable the user to upload files.

 {:.alert.alert-info}
 * Works well for a range of file types: documents, images etc.
 * Can be combined with possible actions (drag/ drop, rename, delete).
 * Use in combination with feedback indicators, such as updating the name, [system status](../../ui-patterns/feedback-notifications/system-status/) or document miniature.
 * By default, any file type is accepted, but you can add parameters to validate a specific one.

 Associated patterns: [Forms]( ../../ui-patterns/forms/), [Feedback / notifications](../../ui-patterns/feedback-notifications/).
 {:.section-end}

 ## Behaviour

 The main button can be clicked, tapped in touchscreen devices or accessed by keyboard through tabbing and pressing the ‘Enter’ key.

 Next, the default OS file uploader is displayed, where the user can select the file that needs to attach.
 {:.section-end}

do-and-dont:
- title: Do
  text: Give the button and empty state text a descriptive label specifying the type of file, if there is any.
  columns: 6
- title: Do
  text: Consider to provide a preview once the user has uploaded a file and enable to rename or remove it.
  columns: 6
- title: Do
  text: Add [progress indicators](../../ui-patterns/feedback-notifications/system-status/) to provide feedback about the uploading process.
  columns: 6
- title: Don't
  text: Hide the input or keep it empty once a file was uploaded.
  columns: 6
- title: Consider
  text: Use an ellipsis (...) if the filename extends beyond the max. width of its parent element.
  columns: 6
- title: Do
  text: Any errors that may occur with the file should appear as an inline error Notification.
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

related: [Text input]

---
A kind of form input that provides a button to enable the user to upload files.
