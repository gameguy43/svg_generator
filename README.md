# SVG Generator

For making SVGs programmatically that are easy to manipulate.



## Getting started

[Fork and clone the repository.](https://help.github.com/articles/fork-a-repo/)

Start your local server:

    $ python -m SimpleHTTPServer

Open a diagram:

    $ open http://localhost:8000?diagram=<diagram file name>

Diagram files are in [diagrams/](diagrams/) so for example:

    $ open http://localhost:8000?diagram=linked-list-small



## Making a new diagram

Copy the template into a new diagram file:

    $ cp diagrams/template.js diagrams/<new-diagram-name>.js

Open your diagram:

    $ open http://localhost:8000?diagram=<new-diagram-name>

Set a namespace for your diagrams, and a width and height. Your diagrams will automatically be set to `svgWidth` and `svgHeight`, and you can [manually set the dimensions of individual diagrams](#helper-functions).

The **dynamic values** section is for variables to hold things like the size of nodes, the distance between nodes, and the font size of labels.

The **drawing functions** section should hold functions for things like drawing binary trees or drawing arrows.

If you need multiple similar diagrams, add a function for each diagram in `diagramFunctions`.



## Sample diagram

[linked-list-small.js](diagrams/linked-list-small.js)

    $ open http://localhost:8000?diagram=linked-list-small



## Generating elements

See cheetsheet at the bottom of the template and [SVG MDN documentation](https://developer.mozilla.org/en-US/docs/Web/SVG).

### Required and optional arguments

Arguments in brackets are optional. For example, when you make a line:

```
generateLine( x1, y1, x2, y2, [ stroke, strokeWidth, mask ])
```

the *x* and *y* coordinates are required, and the rest of the arguments are optional.

### Masks

There are 2 types of masks:

1. `'bottom-transparent-fade'`: masked contents are transparent at the bottom and opaque at the top
1. `'top-transparent-fade'`: masked contents are transparent at the top and opaque at the bottom


The `topY` argument is the *y* coordinate of the top of the mask.

Masks default to `'bottom-transparent-fade'` if you don't pass `true` as an argument for `isTop`.

Generate a mask, and then apply it to elements by passing `'bottom-transparent-fade'` or `'top-transparent-fade'` as an argument for the elements' `mask` parameter.

Example:

[ram-start.js](diagrams/ram-start.js)

    $ open http://localhost:8000?diagram=ram-start



## Helper functions

`setSVGDimensions(width, height)` <br/>
Changes an individual SVG's width and height.

`round(number)` <br/>
Rounds to 1 decimal place. All `x` and `y` arguments are automatically rounded.

`xof(i, coordinates)` <br/>
`yof(i, coordinates)` <br/>
Get's the coordinate at index `i` if you store coordinates like this:

```javascript
var coordinates = [
    // [x, y]
    [0, 1],
    [0, 4],
    [3, 1],
    [3, 4],
]
```

`randRange(lower, upper)` <br/>
Get a random integer in the range `lower..upper` inclusive.

`randSign()` <br/>
Randomly get 1 or -1.



## Default values

[Default values](js/default_values.js) apply to optional arguments in the `generateElement` functions, and they're available to use in your diagram file.

You can override a default value in your diagram file and it will apply to all elements.

For text, we use our `stroke` value as a default for the text `fill` property.

There are also values for the official Interview Cake blue. Use our transparent color value, not the css value `transparent` (in browsers that don't support rgba, we want to default to white not black).



## Submitting your diagram to Interview Cake

Test your SVG in Chrome, Safari, and Firefox

Add the svg page

Add the data in settings

Add a description

Include on the page using the tag

Increment cache bust if it's a change, not a new svg



## Style guide

Make your diagram close to how you'd draw it on a piece of paper.

Your diagram should fit seamlessly on the page on Interview Cake, as if you used one pen to write the content and draw the diagram.

The elements in your diagram should be nearly at the edge of the SVG.



## Planned features

- load a specific diagram function by passing an index or function name in the query string
- toggle between current display and displaying diagram as if it's on a page
- generate touch and echo commands with custom path to file to make and fill .svg file
- make old diagrams compatible with new version
- testing and error messages
