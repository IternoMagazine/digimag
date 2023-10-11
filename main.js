const ham = document.querySelector(".ham");
const list = document.querySelector("ul");

ham.addEventListener("click", (e) => {
  list.classList.toggle("show");
});
