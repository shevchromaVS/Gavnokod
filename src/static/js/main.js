// menu
let body = document.querySelector("body");
let menuButton = document.querySelector(".menuButton");
let closeButton = document.querySelector(".close");
let menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.style.transform = "translateY(0)";
  body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  menu.style.transform = "translateY(-100%)";
  body.style.overflow = "auto";
});

let link = document.querySelectorAll(".menu_box a");

link.forEach((item) => {
  item.addEventListener("click", () => {
    menu.style.transform = "translateY(-100%)";
    body.style.overflow = "auto";
  });
});

// card open
let allCard = document.querySelectorAll(".modules_box__item");

allCard.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (!e.currentTarget.classList.contains("open")) {
      allCard.forEach((item) => {
        item.classList.remove("open");
      });
      e.currentTarget.classList.add("open");
    } else {
      e.currentTarget.classList.remove("open");
    }
  });
});

// open modal modules
let allButton = document.querySelectorAll(".modalButton");
let allModalModul = document.querySelectorAll(".modal_modul");
let modal = document.querySelector(".modal");

allButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modal.classList.add("open");
    allModalModul[i].classList.add("open");
  });
});

// workshop modal

let workshopModalButton = document.querySelectorAll(".workshop_modalButton");
let workshopModal = document.querySelectorAll(".modal_workshop");

workshopModalButton.forEach((item, i) => {
  item.addEventListener("click", () => {
    body.style.overflow = "hidden";
    modal.classList.add("open");
    workshopModal[i].classList.add("open");
  });
});

modal.addEventListener("click", () => {
  body.style.overflow = "auto";
  modal.classList.remove("open");
  workshopModal.forEach((item) => {
    item.classList.remove("open");
  });
  allModalModul.forEach((item) => {
    item.classList.remove("open");
  });
});

// promo modal

let modalPromo = document.querySelector(".modal_promo");
let modalPromoButton = document.querySelector(".modal_promoButton");

modalPromoButton.addEventListener("click", () => {
  body.style.overflow = "hidden";
  modal.classList.add("open");
  modalPromo.classList.add("open");
});

// speech modal

let modalSpeech = document.querySelector(".modal_speech");
let speechButton = document.querySelector(".speechButton");

speechButton.addEventListener("click", () => {
  body.style.overflow = "hidden";
  modal.classList.add("open");
  modalSpeech.classList.add("open");
});

// photo modal

let modalPhoto = document.querySelector(".modal_photo");
let photoButton = document.querySelector(".photoButton");

photoButton.addEventListener("click", () => {
  body.style.overflow = "hidden";
  modal.classList.add("open");
  modalPhoto.classList.add("open");
});

document.querySelectorAll(".modal>*").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
