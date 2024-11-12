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

const header = document.querySelector(".header");
// header.style.backgroundColor = "green";
// header.style.color = "purple";

// ########## classList ########## //

header.classList.add("brown", "container");
