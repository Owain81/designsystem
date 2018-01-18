---
title: Error notification
layout: design-pattern
category: Feedback/notifications
permalink: ui-patterns/feedback-notifications/error-notification/

# Design pattern type is for distinguish layouts for mobile and desktop design patterns.
# Available variables:
# - mobile
# - desktop
design-pattern-type: mobile

what:
 A sign that appears when an app fails to complete an expected action, explaining the reason for failure, and providing instructions to reverse this situation.

why:
 To communicate to the users what the situation is, that the process failed, and encourage them to complete an action.

do: >
 * Explain what is happening in plain language.
 
 * Suggest a constructive solution.
 
 * Maintain the information the user already entered.
 
 * In forms, errors should be clearly marked.
 
 * Remove message once the errors are fixed.
 
 * Consider adding a retry button for system errors.
 
 * Prevent errors occuring by using hints and inline feedback.

dont: >
 * Confuse with a warning. An error is something that already happens.
 
 * Hide errors made by users in forms, showing the message on top.

---