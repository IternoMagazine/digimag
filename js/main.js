const ham = document.querySelector(".ham");
const list = document.querySelector("ul");

ham.addEventListener("click", (e) => {
  list.classList.toggle("show");
});

// Typing effect
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "GALLERY";
  }, 0);
  setTimeout(() => {
    text.textContent = "ARTICLES";
  }, 4000);
  setTimeout(() => {
    text.textContent = "PHOTOS";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);
