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

## Intro to DOM Manipulation

### Article of a comprehensive collection about DOM Manipulation

- [JavaScript DOM Manipulation](https://github.com/ths-lund-fullstack-2024/article-comprehensive-docs-on-dom-manipulation) by Niklas Fähnrich

### Create HTML Elements

#### createElement

### Appending to DOM

#### appendChild

#### insertAdjecentElement

#### insertAdjecentHTML

### Create references

#### querySelector

#### querySelectorAll

#### Older methods

### Update

#### innerHTML

#### innerText

### Manipulation

#### style

#### classList

#### getAttribute

#### setAtribute

#### removeAttribute

#### removeChild

#### replaceChild
