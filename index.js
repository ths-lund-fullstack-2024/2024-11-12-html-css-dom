// ########## create element, update innerText and appendChild ########## //

// const articleEl = document.createElement("article");
// articleEl.innerText = "This is an article";
// console.log(articleEl);

// const body = document.body;
// body.appendChild(articleEl);

// ##########  querySelector ########## //

// const header = document.querySelector(".header");
// console.log(header);

// const aContact = document.querySelector("a");
// console.log(aContact);

// const aContact = document.querySelector(".contact");
// aContact.innerText = "Join us";
// console.log(aContact);

// ##########  querySelectorAll ########## //

// const aTags = document.querySelectorAll("a");
// console.log(aTags);

// for (const a of aTags) {
//   console.log(a);
// }

// aTags.forEach((a) => {
//   console.log(a);
// });

// ########## style ########## //

// const header = document.querySelector(".header");
// header.style.backgroundColor = "green";
// header.style.color = "purple";

// ########## classList ########## //

// header.classList.add("brown", "container");
// console.log(header.classList);

// ########## getAttribute ########## //
// const image = document.querySelector(".santa");
// const altText = image.getAttribute("alt");
// console.log("alt:", altText);

// ########## setAttribute ########## //
// image.setAttribute("alt", "just a regular santa");
// const altText = image.getAttribute("alt");
// console.log(altText);

// ########## removeAttribute ########## //
// image.removeAttribute("alt");

// ########## insertAdjecentElement ########## //
// const section = document.createElement("section");
// section.innerText = "This is a section.";

// const main = document.querySelector("main");

// main.insertAdjacentElement("beforebegin", section);
// main.insertAdjacentElement("afterend", section);
// main.insertAdjacentElement("afterbegin", section);
// main.insertAdjacentElement("beforeend", section);

// ########## innerHTML ########## //
const articleAsAString = "<article>This is an article</article>";
console.log(articleAsAString);

const main = document.querySelector("main");
// main.innerHTML = articleAsAString;
main.innerHTML += articleAsAString;
