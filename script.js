"use strict";
const target = document.querySelectorAll(".mask-bg");
const offset = 100;

const options = {
  root: null,
  rootMargin: "10px",
  threshold: 0,
};

const observer = new IntersectionObserver(addClass, options);

target.forEach((el) => {
  observer.observe(el);
});

function addClass(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-animation");
    }
  });
}
