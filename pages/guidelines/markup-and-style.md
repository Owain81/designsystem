---
title: Markup and style
layout: default-page
category: guidelines
permalink: markup-and-style/
order: 3
breadcrumbs: true
---

## About
Within the UX Center we value our users and want to give them the perfect experience, when working with our assets. Our code library is built and actively maintained to ensure the developers of Unit4 are able to create solutions that have one look and feel, across all platforms, while adhering to CSS best practices and conventions.

One solution that fits all isn’t something that happens in one day. In order to accomplish this goal, we have chosen to go for a very specific naming convention. This allows us to have flexibility, maintainability, easy naming, and limits specificity. For our codebase we use BEM. This method of writing code was developed by Yandex and is meant to help developers create extendable and reusable interface components.

BEM is a well known method for naming components, it stands for block - element and modifier. BEM is not only for developers. It is about communicating between technologies and the people using them.

### Block
This is the main component name. It is completely independent and can be re-used anywhere. If we take a tree as example, the class name would be `.tree`. Every attribute you want to include for all trees, should be added to the base class `.tree`.

### Element
An element is a part of a component. The element cannot sustain outside the block element. A leaf is part of the `.tree` component, which is being written like `.tree__leaf`. Don’t go overboard with naming when adding smaller elements within a larger one. Avoid using `.tree__leaf__base`, instead use `.tree__leaf-base`.

It’s possible that an element, button for instance, is used in multiple components. In these cases make a small component, and use it inside the `.tree` component.

### Modifier
Just as with a tree an component can have numerous variations. The variation can be applied to the whole component or on an element within the component. The modifier describes its appearance and its behavior.  

At the base all components should have the `.tree` class name. In case of a variation the component gets a modifier, for example `.tree--oak`. This is to differentiate from the main component.

A modifier is not isolated and can not be used in isolation from the modified block or element. It should change the appearance, behavior, or state of the entity, not replace it.

## Additional information

### Spacing
One of the most important aspects of design is spacing. It is used everywhere in software and is found everywhere in the codebase of every product.  This is why we have  used spacing to create consistency across all our components.

Spacing consists of three levels
* Grid spacing
* Outside a component
* Inside a component

Our system has a base value of four, meaning every step can only have an increment of four pixels. This should enable an easier understanding of how everything is set up.

What you see above has been translated into a variable system. It is set up in such a way that everyone can easily implement spacing using the sizing system that is common in the apparel industry.  Each size represents a value and can be used as followed  `set-space(m)`.

### States
A state is something that augments and overrides all other styles. For example, an accordion section may be in a collapsed or expanded state. A message may be in a success or error state.

States are generally applied to the same element as a layout rule, or applied to the same element as a base module class.

A state indicates a JavaScript dependency and is applied to layout or a component. In the case of the accordion, when it is expanded, the element will get a class name of `.is-open`. The accordion is expanded. Removing the class name will collapse the accordion and bring it back to its natural state.

Whenever applying a state, start with `.is-` followed by the action or behavior. In doing that, every developer is aware of when a state is being triggered.
