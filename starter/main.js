"use strict";
//open account
const openAccountBtn = document.querySelector(".openAccountBtn");
const openAccount = document.querySelector(".openAccount");
const closeModal = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

// oprations Section
function handleBankOperations(event, idname) {
  const texts = document.querySelectorAll(".oprationsText");
  const allBtn = document.querySelectorAll(".oprationsBtn");

  for (let i = 0; i < texts.length; i++) {
    texts[i].style.display = "none";
  }
  for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].className = allBtn[i].className.replace(
      " operations__btn--active",
      ""
    );
  }
  document.getElementById(idname).style.display = "flex";
  event.currentTarget.className += " operations__btn--active";
}

// for (let i = 0; i < allBtn.length; i++) {
//   allBtn[i].addEventListener("click", (e) => {
//     console.log(e.target.getAttribute("data-wriiteup"));
//     if ((i = 0)) {
//       texts[0].classList.add("operations__btn--active");
//       texts[1].classList.contains("operations__btn--active")
//         ? texts[1].classList.remove("operations__btn--active")
//         : "";
//       texts[2].classList.contains("operations__btn--active")
//         ? texts[2].classList.remove("operations__btn--active")
//         : "";
//     }

//     if ((i = 1)) {
//       texts[1].classList.add("operations__btn--active");
//       texts[0].classList.contains("operations__btn--active")
//         ? texts[0].classList.remove("operations__btn--active")
//         : "";
//       texts[2].classList.contains("operations__btn--active")
//         ? texts[2].classList.remove("operations__btn--active")
//         : "";
//     }

//     if ((i = 2)) {
//       texts[2].classList.add("operations__btn--active");
//       texts[1].classList.contains("operations__btn--active")
//         ? texts[1].classList.remove("operations__btn--active")
//         : "";
//       texts[0].classList.contains("operations__btn--active")
//         ? texts[0].classList.remove("operations__btn--active")
//         : "";
//     }
//   });
// }

const oprationsBtn1 = document.querySelector(".oprationsBtn--1");
const oprationsBtn2 = document.querySelector(".oprationsBtn--2");
// const oprationsBtn3 = document.querySelector(".oprationsBtn--3");

const oprationsBtnSection = document.querySelector(".oprationsBtnSection");
const oprationsText1 = document.getElementsByClassName("oprationsText--1");
const oprationsText2 = document.getElementsByClassName("oprationsText--2");
const oprationsText3 = document.getElementsByClassName("oprationsText--3");

//mobile nav
const mobileMenu = document.getElementsByClassName("mobileMenu");
const mobileClose = document.getElementsByClassName("mobileClose");
const mobileText = document.getElementsByClassName("navMobileText");

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
