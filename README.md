# Creating and Inserting DOM Nodes

## Problem Statement

Here we are at our last component of learning JavaScript DOM programming.

1. Ask the DOM to find or "select" an HTML element or elements in the rendered page
2. Remove the selected element(s) or insert a new element (and / or)
3. Adjust a property of the selected element(s)

We've come to understand the DOM and have powerful tools for selecting the
right elements. We now want to understand creating new nodes, deleting nodes,
and updating nodes' properties.

## Objectives

1. Create DOM elements programmatically
2. Append elements in the DOM
3. Change properties on DOM nodes
4. Remove elements from the DOM

## Create DOM Elements Programmatically

### `document.createElement()`

Creating an element in JavaScript couldn't be easier. Simply call
`document.createElement(tagName)`, where `tagName` is the string representation
of any valid HTML tag (e.g., `'p'`, `'div'`, `'span'`, etc.).

Open this lesson's `index.html` file in your browser and open up the browser's
console. In the console, enter

``` javascript
var element = document.createElement('div')
```

The element doesn't show up on the page. What gives?

## Append Elements into the DOM

To get an element to appear in the DOM, we have to append it to an existing DOM
node. To go back to our tree metaphor, we have to glue our new leaf onto a
branch that's already there. We can start as high up on the tree as
`document.body`, or we can find a more specific element using any of the
techniques we've learned for traversing the DOM.

### `appendChild()`

Let's append `element` to `body` to start:

``` javascript
document.body.appendChild(element)
```

If you've been following along, you should see `"Hello, DOM!"` on the page now.

We can continue to update `element`, since we have a reference to it:

We can append elements to that element:

``` javascript
var ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)
```

## Change Properties On DOM Nodes

We can change properties on DOM Nodes to change their appearance.

``` javascript
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9';
```

Ka-bam! You've changed what's on the screen!

Feel free to set as many properties as you'd like — this is a good chance to
look around and explore different properties of DOM elements!

Let's adjust the display:

``` javascript
element.style.textAlign = 'center';
ul.style.textAlign = 'left'
```

That's better!

## Remove Elements from the DOM

Now let's remove one of those `li`s.

### `removeChild()`

Let's really use the power of `querySelector` _and_ method chaining.
The `removeChild()` method requires us to find a parent and tell it to remove
its already-found child:

``` javascript
ul.removeChild(ul.querySelector('li:nth-child(2)'))
```

Boom. Second element is gone.

What if we want to remove the whole unordered list (`ul`)?

### `element.remove()`

We can just call `remove()` on the element itself:

``` javascript
ul.remove()
```

And it's gone!

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

## Conclusion

We learned how to create, append and remove elements in the DOM with JavaScript. What's amazing about this is that you now understand "DOM programming with JavaScript."

You can:

1. Ask the DOM to find or "select" an HTML element or elements in the rendered page
2. Remove the selected element(s) or insert a new element (and / or)
3. Adjust a property of the selected element(s)

To create even richer experiences we can build on this foundation by:

1. Learning more about (*trumpets*) The JavaScript Programming Language
2. Learning to set *events* that trigger DOM manipulation behavior.

As a taste of what lies ahead, open a new tab and try pasting this into the
DevTools Console.

```javascript
let myName = "Byron the Poodle";
let colors = [
  "red", "orange", "yellow",
  "blue", "green", "indigo",
  "violet"
];
let updateFrequency = 500;

let body = document.getElementsByTagName("body")[0];

let currColor = colors[0];
let colorPost = 0;

let newHeader = document.createElement("h1");
newHeader.innerText = myName;
body.appendChild(newHeader);

setInterval( function() {

  if (colorPost > colors.length)  {
    colorPost = 0;
  }

  newHeader.style.color = colors[colorPost];
  colorPost++;
}, updateFrequency);
```

You should be able to grasp what's going on here and even be able to make some
fun edits!  Good luck on your continued exploration of JavaScript!
