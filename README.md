# Repetition of HTML & CSS and a intro to DOM-manipulation

<details open>
<summary>Table of content</summary>

- [HTML Repetition](#html-repetition)

  - [Key points](#key-points)
  - [Semantics](#semantics)

- [CSS Repetition](#css-repetition)

  - [Syntax](#syntax)
  - [Box model](#box-model)
  - [CSS Specificity](#css-specificity)

- [DOM Manipulation](#intro-to-dom-manipulation)

  - [Article about DOM Manipulation](#article-of-a-comprehensive-collection-about-dom-manipulation)
  - [Create HTML Elements](#create-html-elements)
  - [Appending to DOM](#appending-to-dom)
  - [Create references ](#create-references)
  - [Update](#update)
  - [Manipulation](#manipulation)

- [Event Handling](#event-handling)

  - [Click](#click)
  - [Input](#input)
  - [Submit](#submit)

</details>

## HTML Repetition

It stands for Hypertext Markup Language. Say it once, and then never again. But what is a HTML element, that's more importan. It contains of different parts. Let's look at the syntax.

```html
<div id="20" class="some-class">
  Here is some content of the html element. This can be just text content, or it
  could be child elements.
</div>
```

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Key points

- `<div></div>`: start and end tag. Almost every html element has a start and an end.

- `<div>content</div>`: the content insde an html element. Can be something as easy as a text, but also nestet elements, on other words child elements. And those child elements can in turn have their own child elements. The nesting can go on for many levels.

- `id & class`: Example of attributs that can be applied to the element. Id and class are very common attributes that can be paplied on every HTML element out there. But there are also special attributed that are only avaialable on certain html element. Like `src` on an `<image>` tag. Attributes can add functionlity to html elements.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Semantics

Semantics is the art of using the correct html element in the correct situation.

For example, if you are creating a set of links with a-tags, don't just put them in a div. Try to using the more semantic nav-tag instead.

Using a semantic elements also helps you website when it comes to search engine optimization. It can be so beneficial that the browser adds functionality to your website per default. This is very usefel when thinking about accesability. For instance, if a user has impaired vision, the browser can read the content out load.

Of all the 130ish elements that exist, everyone except two has some sort of semantic value. The non-semantic ones are:

- `<div>`
- `<span>`

But you guess which one of all these elements are being used to most?..

It is of course okay to use these elements but always think one more time if there is a more semantic one available.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

## CSS Repetition

### Syntax

<image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-XSZ7w9TqG7Q%2FXyuzeDhikBI%2FAAAAAAAAAFA%2FpKOcpM-wVYobQPZ64yA5qOEP4BXR4SgrACLcBGAsYHQ%2Fs955%2FJava%252BScript_CSS-Syntax_1560957204.jpg&f=1&nofb=1&ipt=810d9bd81e78b9803a532f4a2b97e6dabb5ec9ba35dfa6e9ea90e283b3e21048&ipo=images">

- Selector: the target element we would like to apply styling to.
- Declatration: A collection of all the styls that are applied to the target element
- Property-value: A specific property that styles the target element in a very specifc way. It is always paird up with value, so a more common term is key-value-pair. The value is to which degree the applied styling should have.

In the example, we are targeting every h1-element on the html document and applying the text color to be black and the font-size to be 12 px.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Box model

<image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gcflearnfree.org%2Fcontent%2F5ef2084faaf0ac46dc9c10be_06_23_2020%2Fbox_model.png&f=1&nofb=1&ipt=6ad526a86bb4de7dd7907281c541e7d24d7e9b10df4ea4a7936109b435e223f0&ipo=images">

- content: the content inside the html tags. Can be just plain text but can also be other html elements as well. If there are elements within another element, thery are called child elements.
- padding: the transparent area between the border and the content. We can change this area depeneding on our needs in form of layout.
- border: marks the end of the box. Border, padding and content makes up a "css box", but in other words, the html element itself. The borde is transparent per default but we can style that as well depending on our needs.
- margin: defines the transparent area outside the box. It can be used to push other content away from the box itself.

Key point here, content, padding and border belongs to he box. Margin is outside the box.

When to use padding, border or margin? It all depends on your use case. Personally, i use padding more than I use margin. Since margin affect other boxes, it can lead to unprediced behaviour sometimes, if you have many boxes that "pushes" on eachother with margin. Border has its use cases, when you want do defined the end of a box with a visible line or something like that.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### CSS Specificity

Specificity is just a tool that the browser uses in order to decide which styling to apply to any given element.

Take this example

```css
div {
  background-color: yellow;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

div {
  background-color: mediumaquamarine;
}
```

Which styling is applied? The selectors are identical? The browser must differentiate them somehow. The first "tool" it uses, is the order of definition. Since the `mediumaquamarine` is defined later in the file, that styling will apply. The margin and padding remains the same, since they are not redefined later in the file.

Another example

The html file:

```html
<div class="box-1">Box 1</div>
<div>Box 2</div>
<article class="box-1">Box 3</article>
```

The css file:

```sql
article.box-1 {
  background-color: aqua;
}

.box-1 {
  background-color: fuchsia;
}

div {
  background-color: yellow;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

div {
  background-color: mediumaquamarine;
}
```

Which background color will the article element with the class box-1 get?

In this case, the "aqua" color since a element combind with a class gives a higher speciicity than just a class.

In summary, always use as high specificity as possible on your selectors. The highter the better. It allows you to pinpoint exactly where every styling should apply, without worrying about styling that "bleeds" over to other elements.

```css
div.box-3 {
}
```

This selector, will target a div element that has the class box-3. You put the selectors together.

```css
div .box-3 {
}
```

This on the other hand will target en element with the class box-3 that is a child element of a div. So this combination is made up with a white-space between the selectors.

Then you combinde them in more details

```css
article.container .header {
}
```

This selector targets an element with the class header that is a child element of a article element with the class container.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

## Intro to DOM Manipulation

### Article of a comprehensive collection about DOM Manipulation

- [JavaScript DOM Manipulation](https://github.com/ths-lund-fullstack-2024/article-comprehensive-docs-on-dom-manipulation) by Niklas Fähnrich

### Create HTML Elements

#### document.createElement(type) => HTML Element

This method is used to create a html element. The paramter "type" is the kind of element we would like to create, and it must be a string. It can a be a div, a, span, article, section, main and so on..

The return value is the created html element which means we can directly store that html element inside a variable. And from there we can do other stuff.

```js
const articleEl = document.createElement("article");

console.log(articleEl);
```

This will create the element and store the element on the DOM object but it is not visible or anything, it doesn't have any content whatsoever. If do inspect the element that was created via a log to the console. We can clearly see the the elements is represented by an object, and this object contains loads of properties that we can use in order to manipulate this element.

In order to actually see the new element inside the DOM, we need to add it there.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Appending to DOM

This section contains a coplue of methods that we can use in order to add elements to the DOM, and actually see them in the browser and in the inspector element view.

#### appendChild

This methods will append a node as the last child element of the element on which this methods was invoked. So for instance, if we would like to append our element from above to the body, we need to invoke this method on the body element.

Why body? Because, a html documnet can't exist without a body element. So if we don't have any other elements to use, we can always use the body element. How to access to body?

```js
const body = document.body;
```

Let's use this to add our created element.

```js
const articleEl = document.createElement("article");

body.appendChild(articleEl);
```

This will append the articleEl to the DOM inside the body element. Even though the appendChild-method returns the node it appended, I am not interested in that return value. I just want the method to do its thing.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### insertAdjacentElement(position, element) => void

Works similar to `appendChild()` but we can choose position on where to place the element relative to its parent. As always, most of all the DOM-methods we use, are invoked on a parent element.

Two parameters, one for the position and one for the element that is supposed to be inserted.

The position agrument can have four values:

- `beforebegin`: this will insert the element before the parent element. It will in other words be a sibling element to the element on which this method was invoked.

- `afterend`: this will insert the element after the parent element. It will be a sibling element as well to the element on which the methods was invoked.

- `afterbegin`: this will insert the element as the first child element of the parent element on which the method was invoked on.

- `beforend`: this will insert the element as the last child element of the parent elementon which it was invoked on. Much like the `appendChild()`-method.

The element parameter is just the element we would like to insert.

```js
const section = document.createElement("section");
section.innerText = "This is a section.";

const main = document.querySelector("main");

main.insertAdjacentElement("beforebegin", section);
```

This will add the element just before the main element, a sibling.

Let's take another one:

```js
main.insertAdjacentElement("beforebegin", section);
```

This will instead place the element after the element on which the method was invoked on. So still a sibling element, but on the other end.

One thing to notice here, even though we invoked the method twice with the same element, we still only have one section in the DOM. That's because HTML element are reference data type, which means it just points to something. If we move the reference we move the enitre element, we do not dublicate it as you might think.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### insertAdjacentHTML

Works similar to the insertAdjacentElement` but it accepts a string as the second argument instead of a HTML element. This string can contain HTML characters and the browser can then parse the to proper HTML.

```js
const section = `
  <section class="section">
    <p>This is a paragraph inside the section</p>
  </section>
`;

const main = document.querySelector("main");

main.insertAdjacentHTML("beforebegin", section);
```

This will work fine, the string will be parsed to HTML and added as a sibling before the `main` element.

Let's do the last line again and try to add it as the last child of the main instead.

```js
main.insertAdjacentHTML("beforeend", section);
```

So here is a difference in behavoiur. By running this line of code again, we dublicate the section instead of just moving it, as it did with the `inserAdjacentElement`. That's because the string variable is just a string, it's not a reference type. The value of the string is stored inside the variable. Which means the `insertAdjacentHTML` will insert it one more time, and of course let the browser parse it to a new HTML element.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Create references

These methods are used in order to create references to existing html elements. We need those in order to manipulate them.

#### querySelector(css selector) => HTML Element | Null

Is used to create a reference to a html element. It takes one parameter whichs is a css selector. If a match is found then that elemenet will be returned. Otherwise null will be returned.

```js
const header = document.querySelector(".header");
console.log(header);
```

This works fine, since we just have one element with that class in our DOM.

Let's try and access the a-tag with the innerText "Contact". We use a element selector to begin with.

```js
const aContact = document.querySelector("a");
console.log(aContact);
```

This line of code returns the first a-tag that is found in the document, since it's not very specific. Let's search for an a-tag with the class "contact" instead.

```js
const aContact = document.querySelector(".contact");
console.log(aContact);
```

This one returns the element that has the class "contact" which is the one we are looking for.

When we have this reference we can then start manipulating the element in any way we want to.

#### querySelectorAll

This on is used when we want to access several elements at the same time, that all match the given css-selector.

```js
const aTags = document.querySelectorAll("a");
console.log(aTags);
```

This will give us a nodelist that contains every element that matches the selector. in this case, we have three a-tags in the nodelist.

Nodelist may look like an array, but it is NOT an array. Although we can loop through it, and access the different elements with an index, we can't use methods suchs as push(), pop() and so on. But looping works!

```js
for (const a of aTags) {
  console.log(a);
}
```

this is a regular for..of-loop. There exists a method on nodelists that we can use aswell to loop through the nodelist.

```js
aTags.forEach((a) => {
  console.log(a);
});
```

This works exactly the sam as a regular for-loop. Remember, the callback is invoke in every iteration on the element that we are currently iterating over. Which means we have access to iterated element every time.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Update

Contains a copule of methods to edit existing HTML elements, with a focus on the content of the HTML element.

#### innerHTML

This attribute gets or sets the HTML content inside a parent element. This HTML content could just be a string but it can also contain HTML syntax inside the string and the borwser will be able to parse to a proper HTML element.

Creating a HTML element form scratch can be a bit of a hassle. First we need to create the element, then change the innerText, then we might want to add some classes, maybe an id, and then some attributes and so on. Quite a few method calls to make, and many lines of code.

This property gives us the opportunity to create HTML as a string, and let the browser to the heavy lifting of create the element.

```js
const articleAsAString = "<article>This is an article</article>";
console.log(articleAsAString);
```

This on its own is just a string, not very useful in this case. Let's use innerHTML on the `main` element to add this html string.

```js
const main = document.querySelector("main");
main.innerHTML = articleAsAString;
```

As you can see, this will replce all of the content inside the `main` with this articleAsString-variable. So be careful when using it.

Let's try to "append or concatinate" instead

```js
main.innerHTML += articleAsAString;
```

This works and the new article will be addes as the last child of the `main`. This works because the `innerHTML` is a string representation of the content, with the added benifit that the browser can parse HTML specifc characters to proper HTML. So what we do here, is just adding two string together and then let hte browser parse it to HTML.

#### innerText

innerText is a property of every element that exists, wether we create it or it already exists

Let's take our article as an example.

```js
const articleEl = document.createElement("article");
articleEl.innerText = "This is an article";
```

We have our article, and then we access the innerText property and just set that value to someting. In this case: "This is an article"

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Manipulation

A set of methods to manipulate the element in different ways.

#### style

This property is used to get or set the styling of the element. Every style that is available inside a css-file is available on thie property, which means we can use it to access, color, fontSize, backgroundColor, margin, padding and so on. The difference between a stylesheet and setting a style with this property is that using this property sets the style on the actual style-attribute on the html-element.

if we want to change the header to have background of green:

```js
const header = document.querySelector(".header");
header.style.backgroundColor = "green";
```

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### classList

classList is an attribute that has an array-like value. It simpky contains all the classes that are applied to the given element. It's not an array, it's a `DOMTokenList`. A special kind of object in JS. Let's look at it:

```js
const header = document.querySelector(".header");
console.log(header.classList);
// DOMTokenList(3) ['header', 'brown', 'container', value: 'header brown container']
```

Looks like an array, but also looks like an object, but it is neither.

This DOMTokenList also has some methods and properties that we can use. You can see them on this link: [DOMTokenList - W3Schools](https://www.w3schools.com/JSREF/dom_obj_html_domtokenlist.asp).

Several methods but three are important:

- `add()`: adds a token to the classList.
- `remove()`: removes a token from the classList.
- `contains()`: checks if a token is present in the classList or not. Returns a boolean for easy use in a if-check for instance.

Let's take an example. Add two classes to the header from above:

```js
header.classList.add("brown", "container");
```

This line of code adds two classes to the element, in other words, two tokens to the DOMTokenList. Works fine with just one as well.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### getAttribute(attribute) => value of th attribute

This method is used to return a value on a specific attribute on an element.

```html
<img class="santa" src="some-image" alt="A red santa" />
```

Let's take this image tag and get the value of the `alt`-attribute.

```js
const image = document.querySelector(".santa");
const altText = image.getAttribute("alt");
console.log("alt:", altText);
```

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### setAttribute(attribute, newValue) => void

A method that updates the value on a specific attribute on en element.

Let's update the `alt`-value on the santa image to some other text.

```js
image.setAttribute("alt", "just a regular santa");
const altText = image.getAttribute("alt");
console.log(altText);
```

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### removeAttribute(attribute) => void

Removes an attribute on an element. Takes one parameter, which is the attribute to remove.

Remove the `alt`-text from above.

```js
image.removeAttribute("alt");
```

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### removeChild

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### replaceChild

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

## Event Handling

Event is just something that happens when a user interacts with a application or website. It's called that an event is triggered when you do something. It could be a click, an input change somewhere, maybe a hover on some part of the application that shows some content and so on. These are all events that we can handle with javascript, and do different things, run some code maybe.

The most common event is by far the click-event, but there are over a 100 different kinds of events, here is a complete list of them all: [W3Schools - list of DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp).

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### addEventListener(event, callback, useCapture?) => void

This method is used to add an event listener to a HTML element and it's available on every HTML element there is. You just need a reference to the specific element and then you can add the listener.

Three parameters:

- **event**: a string representation of the event you want to listen to. Could be a `"click"` event, a `"input"` event or some other event. Check the list above for all the events.

- **callback**: this is the function that will run whenever the specified event has been triggered. The callback ALWAYS have access to the **_event object_** that is created by JavaScript in order to capture information about the said event.

- **useCapture**: optional configuration weather the event should be triggered in the bubbling phase or the capture phase. This is beyond the scope of the course, but you can read about it here: [Understanding the useCapture Parameter in addEventListener](https://dnmtechs.com/understanding-the-usecapture-parameter-in-addeventlistener/).

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### Syntax of an eventListener

```html
<button class="btn">Click me</button>
```

```js
// First step - create reference to the element
const button = document.querySelector(".btn");

// Secont step - add the event listener to the element and create the logic
button.addEventListener("click", (event) => {
  // code to execute when the click event was triggered on the button element.
});
```

This syntax is just one of, I think, three different ones. But this is the most dynamic one to use of several different reasons, but we are not going to explore them. Just accept that this is the best syntax.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Click

Click is by far the most common event when it comes to web applications. Let's try it out by creating button in our HTML and then registering a click event on it.

#### Basic example

```html
<button class="btn">Click me to get presents</button>
```

```js
const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  console.log("The button has been clicked.");
});
```

This will just log a text to the console. Not very funny but it shows that it works.

Let's do another example, let's create a another button on which we change the text every time we click on it.

```html
<button class="btn1">Click me to change this text</button>
```

```js
const button1 = document.querySelector(".btn1");

button1.addEventListent("click", (event) => {
  button1.innerText = "Now I have a new text!";
});
```

This will change the text in the button on the first click. On the second click nothing will happen because the text has already been changed. In reality, the code is invoked again but since we are updating to the same thing, we won't see anything in the browser.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### Change content with Click

We could add a if check to see what the content is, and from there change it accordingly.

```js
button1.addEventListent("click", (event) => {
  const innerText = button1.innerText;

  if (innerText === "Click me to change this text") {
    button1.innerText = "Now I have a new text!";
  } else {
    button1.innerText = "Click me to change this text";
  }
});
```

This example is a bit more useful since we can change the text back and forth.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

#### Show and hide content with Click

In this case we will have some sort of content that will be hidden by default, and by clicking on a button, this hidden content will be revealed. Here is the HTML for this example:

_index.html_

```html
<nav class="navbar">
  <button class="link-btn">Show links</button>
  <div class="links close">
    <a class="home" href="#">Home</a>
    <a class="about" href="#">About</a>
    <a class="contact" href="#">Contact</a>
  </div>
</nav>
```

What I have also done, is to add some styling to this specific HTML:

_index.css_

```css
.navbar {
  display: flex;
  gap: 2rem;
}

.links {
  display: block;
}

.links.close {
  display: none;
}
```

This styling just flexes the navbar container and make sures that the links element is hidden by default with the help of the close-class. What we want to do here, is to remove the close-class on the click in order for the links element to be visible again.

_events.js_

```js
const linkButton = document.querySelector(".link-btn");
const linkDiv = document.querySelector(".links");

linkButton.addEventListener("click", () => {
  // No need for the event object.

  if (linkDiv.classList.contains("close")) {
    linkDiv.classList.remove("close");
    linkButton.innerText = "Hide Links";
  } else {
    linkDiv.classList.add("close");
    linkButton.innerText = "Show Links";
  }
});
```

So, this code above, first it create the references to the elements we want to interact with. Then we register the event listener on the button and the create the logic.

The logic removes or adds the class `close` on the links-element, and changes the text on the button depending on if the links are hidden or not.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Input

This event is connected to input elements. It will be triggered everytime you type in a character in an input field. We can listen to this event and execute some code. For instance, we could just log the content of the input field to the console.

Let's create some html:

_index.html_

```html
<div class="input-wrapper">
  <label for="wish">What's your wish?</label>
  <input id="wish" type="text" />
</div>
```

So now we can register an input event on the input element and console.log the value of the input to the console.

_events.js_

```js
const input = document.querySelector(".input-wrapper input");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  console.log(value);
});
```

This will just log the value of the input to the console every time we type in a character inside the input field. but we can do so much more with this. For exampel, let's validate the input. So if the value of the input is longer than 7 characters, we can do something. Let's for instance update the border color of the input field. We need some css for this:

_index.css_

```css
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
}

.input-wrapper.error {
  border-color: red;
}

.input-wrapper.valid {
  border-color: green;
}
```

And then the code:

_events.js_

```js
const fieldset = document.querySelector(".input-wrapper");
const input = document.querySelector(".input-wrapper input");

input.addEventListener("input", (event) => {
  const value = event.target.value;

  if (inputIsValid(value)) {
    fieldset.classList.add("valid");
    fieldset.classList.remove("error");
  } else {
    fieldset.classList.remove("valid");
    fieldset.classList.add("error");
  }
});

function inputIsValid(value) {
  return value.length >= 7;
}

// Alternative version with a arrow function with implicit return.
const inputIsValidAlt = (value) => value.length >= 7;
```

This worked just fine, the border of the fieldset will be updated depending on if the value is valid or not. We could expand this example and add some feedback text aswell. We must add some html and css in order to make this work.

_index.html_

```html
<fieldset class="input-wrapper">
  <label for="wish">What's your wish?</label>
  <input id="wish" type="text" />
  <p class="feedback">Input must be longer than 7 characters...</p>
</fieldset>
```

_index.css_

```css
.input-wrapper .feedback {
  display: none;
  color: red;
  margin: 0;
}

.input-wrapper.error .feedback {
  display: block;
}
```

And we actually don't have to update the code since the visibility of the feedback element is based on pure css classes.

[Back to top](#repetition-of-html--css-and-a-intro-to-dom-manipulation)

### Submit
