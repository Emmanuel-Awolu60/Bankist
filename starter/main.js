"use strict";

const openAccountBtn = document.querySelector("#open__account__btn");
const openAccount = document.querySelector(".open__account");
const closeModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

openAccountBtn.addEventListener("click", () => {
  openAccount.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  openAccount.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  openAccount.classList.add("hidden");
  overlay.classList.add("hidden");
});
