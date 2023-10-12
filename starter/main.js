"use strict";
//open account
const openAccountBtn = document.querySelector(".openAccountBtn");
const openAccount = document.querySelector(".openAccount");
const closeModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

const taps = document.querySelector(".oprationsBtn");
const oprationsBtn1 = document.querySelector(".oprationsBtn--1");
const oprationsBtn2 = document.querySelector(".oprationsBtn--2");
// const oprationsBtn3 = document.querySelector(".oprationsBtn--3");

const oprationsBtnSection = document.querySelector(".oprationsBtnSection");
const texts = document.querySelector(".oprationsText");
const oprationsText1 = document.getElementsByClassName("oprationsText--1");
const oprationsText2 = document.getElementsByClassName("oprationsText--2");
// const oprationsText3 = document.getElementsByClassName("oprationsText--3");

//mobile nav
const mobileMenu = document.getElementsByClassName("mobileMenu");
const mobileClose = document.getElementsByClassName("mobileClose");
const mobileText = document.getElementsByClassName("navMobileText");

// Mobile Section
// mobileMenu.addEventListener("click", () => {
//   mobileText;
// });
// const removeClass = classList.remove("hidden");

// Open account buttom
openAccountBtn.addEventListener("click", (e) => {
  e.preventDefault;
  //Button
  openAccount.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  //Close button
  openAccount.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  //overlay
  openAccount.classList.add("hidden");
  overlay.classList.add("hidden");
});

oprationsBtnSection.addEventListener("click", function (e) {
  const clicked = e.target.closest(".oprationsBtn");

  if (!clicked) return;

  taps.classList.remove("operations__btn--active");
  texts.classList.remove("operations__text--active");

  clicked.classList.add("operations__btn--active");
  texts.classList.add("operation__text--active");

  document.querySelector(`text--${clicked.dataset.texts}`);
  // .classList.add("operations__text--active");
});
