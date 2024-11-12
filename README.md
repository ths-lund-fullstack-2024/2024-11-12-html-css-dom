# Repetition of HTML & CSS and a intro to DOM-manipulation

<details open>
<summary>Table of content</summary>

</details>

## HTML Repetition

It stands for Hypertext Markup Language. Say it once, and then never again. But what is a HTML element, that's more importan. It contains of different parts. Let's look at the syntax.

```html
<div id="20" class="some-class">
  Here is some content of the html element. This can be just text content, or it
  could be child elements.
</div>
```

### Key points

- `<div></div>`: start and end tag. Almost every html element has a start and an end.

- `<div>content</div>`: the content insde an html element. Can be something as easy as a text, but also nestet elements, on other words child elements. And those child elements can in turn have their own child elements. The nesting can go on for many levels.

- `id & class`: Example of attributs that can be applied to the element. Id and class are very common attributes that can be paplied on every HTML element out there. But there are also special attributed that are only avaialable on certain html element. Like `src` on an `<image>` tag. Attributes can add functionlity to html elements.

### Semantics

Semantics is the art of using the correct html element in the correct situation.

For example, if you are creating a set of links with a-tags, don't just put them in a div. Try to using the more semantic nav-tag instead.

Using a semantic elements also helps you website when it comes to search engine optimization. It can be so beneficial that the browser adds functionality to your website per default. This is very usefel when thinking about accesability. For instance, if a user has impaired vision, the browser can read the content out load.

Of all the 130ish elements that exist, everyone except two has some sort of semantic value. The non-semantic ones are:

- `<div>`
- `<span>`

But you guess which one of all these elements are being used to most?..

It is of course okay to use these elements but always think one more time if there is a more semantic one available.

## CSS Repetition

### Syntax

<image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-XSZ7w9TqG7Q%2FXyuzeDhikBI%2FAAAAAAAAAFA%2FpKOcpM-wVYobQPZ64yA5qOEP4BXR4SgrACLcBGAsYHQ%2Fs955%2FJava%252BScript_CSS-Syntax_1560957204.jpg&f=1&nofb=1&ipt=810d9bd81e78b9803a532f4a2b97e6dabb5ec9ba35dfa6e9ea90e283b3e21048&ipo=images">

- Selector: the target element we would like to apply styling to.
- Declatration: A collection of all the styls that are applied to the target element
- Property-value: A specific property that styles the target element in a very specifc way. It is always paird up with value, so a more common term is key-value-pair. The value is to which degree the applied styling should have.

In the example, we are targeting every h1-element on the html document and applying the text color to be black and the font-size to be 12 px.

### Box model

<image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gcflearnfree.org%2Fcontent%2F5ef2084faaf0ac46dc9c10be_06_23_2020%2Fbox_model.png&f=1&nofb=1&ipt=6ad526a86bb4de7dd7907281c541e7d24d7e9b10df4ea4a7936109b435e223f0&ipo=images">

- content: the content inside the html tags. Can be just plain text but can also be other html elements as well. If there are elements within another element, thery are called child elements.
- padding: the transparent area between the border and the content. We can change this area depeneding on our needs in form of layout.
- border: marks the end of the box. Border, padding and content makes up a "css box", but in other words, the html element itself. The borde is transparent per default but we can style that as well depending on our needs.
- margin: defines the transparent area outside the box. It can be used to push other content away from the box itself.

Key point here, content, padding and border belongs to he box. Margin is outside the box.

When to use padding, border or margin? It all depends on your use case. Personally, i use padding more than I use margin. Since margin affect other boxes, it can lead to unprediced behaviour sometimes, if you have many boxes that "pushes" on eachother with margin. Border has its use cases, when you want do defined the end of a box with a visible line or something like that.

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

#### insertAdjecentElement

#### insertAdjecentHTML

### Create references

#### querySelector

#### querySelectorAll

#### Older methods

### Update

Contains a copule of methods to edit existing HTML elements, with a focus on the content of the HTML element.

#### innerHTML

####

innerText is a property of every element that exists, wether we create it or it already exists

Let's take our article as an example.

```js
const articleEl = document.createElement("article");
articleEl.innerText = "This is an article";
```

We have our article, and then we access the innerText property and just set that value to someting. In this case: "This is an article"

### Manipulation

#### style

#### classList

#### getAttribute

#### setAtribute

#### removeAttribute

#### removeChild

#### replaceChild
