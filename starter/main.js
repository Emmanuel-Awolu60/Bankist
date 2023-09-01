"use strict";
//open account
const openAccountBtn = document.querySelector(".open__account__btn");
const openAccount = document.querySelector(".open__account");
const closeModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

//mobile nav
const mobileMenu = document.getElementsByClassName("mobile__menu");
const mobileClose = document.getElementsByClassName("mobile__close");
const mobileText = document.getElementsByClassName("nav__mobile__text");

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
