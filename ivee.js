"use strict";
const stepBtn = document.querySelector(".step-btn");
const open = document.querySelector(".all-step-btn");

stepBtn.addEventListener("click", function () {
  open.classList.toggle(" .open");
});
