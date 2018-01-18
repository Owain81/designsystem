---
title: System status
layout: design-pattern-variations
category: Feedback/notifications
permalink: ui-patterns/feedback-notifications/system-status/
design-pattern-type: mobile
extra-video-variation-1: design-pattern-system-status
main-image-variation: design-pattern-system-status.png

what: >
 A visual or textual indication that explains to the user how the system is behaving.

title-variation-1: Progress indicators

what-variation-1: >
 It provides information about the progress of the processes carried out by the system.

why-variation-1: >
 To provide feedback on how the system is behaving, and make users feel in control.

do-variation-1: >
 * Offer a cancel option for potentially lengthy operations.

 * Reduce the waiting time perception.

 * Consider showing different tasks the system is processing.

 * Consider using blank versions of pages in which information is gradually loaded.
 
 * Consider using transitions to reflect the process.
 
 * Consider presenting product features during lengthy loadings.

dont-variation-1: >
 * Avoid using just spinners (loaders).

 * Make users focus on the waiting time.

title-variation-2: Offline communication

what-variation-2: >
 A message shown to the user that reflects the offline situation, usually on mobile devices.

why-variation-2: >
 Give feedback about why some of the functions are not available, and let users try to solve the problem outside the product.

do-variation-2: >
 * Keep users informed; clearly communicate the offline situation.

 * Display as soon as there is no internet, otherwise whenever being offline blocked some action.

 * Offer a reload option.

 * Try to provide as much offline content and tools as possible, through cache and queues.
 
 * Consider displaying an illustration or icon.

dont-variation-1: >
 * Show everlasting spinners or loaders.

 * Show a lot of empty space.

 * Be inconsistent or incomprehensible with the alerts.

 * Let people start something they can’t finish.

 * Show raw error message like: The operation couldn’t be completed. (kCFErrorDomainCFNetwork error 2.).

---