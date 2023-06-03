//create cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");

//add cursor to document when user's mouse enters page
document.addEventListener("mouseenter", () => {
  document.body.prepend(cursor);
});

//remove cursor from document when user's mouse leaves page
document.addEventListener("mouseleave", () => {
  cursor.remove();
});

document.addEventListener("mousemove", (e) => {
  //set cursor position on page
  setCursorPosition(e);

  //check if on selectable element
  isClickable(e);
});

function setCursorPosition(e) {
  cursor.style.setProperty("--y", `${e.y}px`);
  cursor.style.setProperty("--x", `${e.x}px`);
}

function isClickable(e) {
  switch (e.target.nodeName.toLowerCase()) {
    case "a":
      cursor.style.setProperty("--scale", "1.5");
      break;
    case "button":
      animateBtnFill(e);
      break;
    default:
      cursor.style.removeProperty("--scale");
      return;
  }
}

function animateBtnFill(e) {}
