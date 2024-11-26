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

// ########## Basic input event ##########

// const input = document.querySelector(".input-wrapper input");

// input.addEventListener("input", (event) => {
//   const value = event.target.value;
//   console.log(value);
// });

// ########## Input event with more DOM manipulation ##########

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

// ########## Submit event ##########

const form = document.querySelector(".form");
const nameInput = document.querySelector(".name-input");
const ageInput = document.querySelector(".age-input");
const textInput = document.querySelector(".text-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const age = ageInput.value;
  const text = textInput.value;

  validateForm();

  const wishObj = {
    name,
    age,
    text,
  };

  console.log(wishObj);

  form.reset();
});

function validateForm() {
  console.log("The form was validated.");
}
