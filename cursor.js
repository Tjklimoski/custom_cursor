//create cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");

//add cursor to document when user's mouse enters page
document.addEventListener("mouseenter", () => {
  document.body.appendChild(cursor);
});

//remove cursor from document when user's mouse leaves page
document.addEventListener("mouseleave", () => {
  cursor.remove();
});

// document.addEventListener('mousemove', (e) => {
//   const left =
// })
