'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


const more_btn = document.querySelector("#more-destination");
const popular_cards = document.querySelectorAll(".popular-card");
console.log(popular_cards[4]);

more_btn.addEventListener("click", () => {

  popular_cards.forEach(element => {
    if (element.classList.contains("hidden-till-click")) {
      element.classList.remove("hidden-till-click")
    } else if (element.getAttribute("data-morecontent") === "workOnClick") {
      console.log(element.getAttribute("moreContent") === "clicked-on-work");
      element.classList.add("hidden-till-click");
    }
  });
})
console.log(more_btn)