# Unit4 Design System

A CSS/JS/HTML framework which allows you to easily create software using the modular building blocks it provides.

## Usage

Add CSS and JS files to your HTML document:

####CSS:

Paste link below between `<head>` and `</head>` tag in your html files.
```html
<link rel="stylesheet" href="css/u4-designsystem.min.css">
```
####JS:
Paste script link into the bottom of the document, just after `</body>` tag.
```html
<script type="text/javascript" src="js/u4-designsystem-0.1.0.min.js"></script>
```

## Run website example and local server

In order to run our example page you need to install NPM dependencies:
```
npm install
```

And run server:
```
grunt serve
```

## Code Examples

HTML example of a component

```html
<div class="c-panel">
    <div class="c-panel__header">
        <h4 class="c-panel__title">Panel header</h4>
        <div class="c-panel__action">
            <svg class="c-icon o-icon--xxsmall">
                <use xlink:href="#u4-icon--pencil"></use>
            </svg>
        </div>
    </div>
    <div class="c-panel__body">
        <p></p>
    </div>
</div>
```

## Contribution

If you have come across a bug or have a feature request, please open one [here](https://github.com/UXCenter/designsystem/issues/new).

### Bug report
When submitting a bug report please add the following:

* Detailed description of the bug
* Version bug was found on
* Which steps to reproduce
* Expected result/solution

### Feature request
Before filing a feature request, be sure to check the existing features to if the idea has already been proposed.

A good feature request is:

* A concrete idea that is reasonable for use within the library
* Includes relevant information such as background information, the need for such a feature, use cases, expected outcomes and any other information useful to one who is considering the request.

For general questions related to the framework contact the [Design System team](mailto:designsystem@unit4.com).

## License

Copyright (c) 2017 UX Center UNIT4
Licensed under the MIT license.
