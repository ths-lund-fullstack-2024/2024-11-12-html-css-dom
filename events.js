// ########## Basic click event ##########
const button = document.querySelector(".btn");
const button1 = document.querySelector(".btn1");

button.addEventListener("click", (event) => {
  console.log("The button has been clicked.");
});

button1.addEventListener("click", (event) => {
  const innerText = button1.innerText;

  if (innerText === "Click me to change this text") {
    button1.innerText = "Now I have a new text!";
  } else {
    button1.innerText = "Click me to change this text";
  }
});

// ########## Click event to hide or show content ##########

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

// ########## Input event ##########

const input = document.querySelector(".input-wrapper input");

input.addEventListener("input", (event) => {
  console.log(event);
  // const value = event.target.value;
});
