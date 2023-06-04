//create cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");

//get Interactable page elements
const interactableElements = [...document.querySelectorAll("*")].filter(
  (el) => {
    if (el.tagName === "A" || el.tagName === "INPUT") return el;
  }
);

//get button elements for seperate animation effect
const btns = document.querySelectorAll("button");

//add cursor to document when user's mouse enters page
document.addEventListener("mouseenter", () => {
  document.body.prepend(cursor);
});

//remove cursor from document when user's mouse leaves page
document.addEventListener("mouseleave", () => {
  cursor.remove();
});

//set cursor position
document.addEventListener("mousemove", setCursorPosition);

//cursor grows when hovering on interactable element.
interactableElements.forEach((el) => {
  el.addEventListener("mouseenter", setScale);
  el.addEventListener("mouseleave", removeScale);
});

btns.forEach((btn) => {
  btn.addEventListener("mouseenter", fillBtn);
  btn.addEventListener("mouseleave", leaveBtn);
});

function setCursorPosition(e) {
  cursor.style.setProperty("--y", `${e.y}px`);
  cursor.style.setProperty("--x", `${e.x}px`);
}

function setScale() {
  cursor.style.setProperty("--scale", "1.5");
}

function removeScale() {
  cursor.style.removeProperty("--scale");
}

function fillBtn(e) {
  //for cursor to animate filling up the btn
  cursor.classList.add("fill-btn");

  //prevent updating cursor position while inside button
  document.removeEventListener("mousemove", setCursorPosition);

  //hide buttons border (if there is one) to prevent strange visual with cursor overlay
  e.target.style.setProperty("border-color", "transparent");

  const btn = e.target.getBoundingClientRect();
  cursor.style.setProperty("--width", `${btn.width}px`);
  cursor.style.setProperty("--height", `${btn.height}px`);
  cursor.style.setProperty("--x", `${btn.width / 2 + btn.x}px`);
  cursor.style.setProperty("--y", `${btn.height / 2 + btn.y}px`);
}

function leaveBtn(e) {
  //to prevent animating the transform as user moves mouse on page (would casue delay)
  cursor.classList.remove("fill-btn");

  //re-enable mousemove event listener
  document.addEventListener("mousemove", setCursorPosition);

  //return all styles to default
  e.target.style.removeProperty("border-color");
  cursor.style.removeProperty("--width");
  cursor.style.removeProperty("--height");
  cursor.style.removeProperty("--x");
  cursor.style.removeProperty("--y");
}
