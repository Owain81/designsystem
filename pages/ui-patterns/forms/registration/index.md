---
title: Registration
layout: design-pattern
category: Forms
permalink: ui-patterns/forms/registration/
design-pattern-type: mobile

what: >
 A form available for new users to set up their account, and provide relevant customer data.

why: >
 Allow users to create a new account in an application, before being able to sign in.

do: >
 * It should have a minimal number of inputs, elements without important functions.

 * Use preferably one screen, with the command button in plain sight.

 * Clearly mark the optional fields.

 * Use inline feedback to speed up the process and let the user know what’s going on.

 * Consider adding hide/show options to visualise the password.

 * Consider vertically aligned labels over horizontally aligned ones, especially in mobile.

 * Inform about field requirements clearly before the user enters them.

 * Offer feedback on system status once the user submits the form.

 * Once completed, consider the user flow, preferably redirect users to the sign in form with their email already entered.

 * Consider combining it with the connecting design pattern to import user details.

dont: >
 * It is not a sign in, it includes more fields and sets up the account initially.

 * Include Confirm Email and Confirm Password input fields, they are redundant.

 * Do not hide labels by only putting them as hints, consider using float labels instead.

tags: >
 Navigation, forms, user’s profile, new, registration, input, fields, float labels, password, e-mail, account, user, personal.

---