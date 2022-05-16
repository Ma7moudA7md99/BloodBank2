// links display in phone screen
$(document).ready(() => {
  $("#phoneIcon").click(() => {
    $(".links").css({ display: "flex" });
  });
});
// card rotation
var elements = document.getElementsByClassName("card");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    var j = 0;
    while (j < elements.length) {
      if (elements[j].classList.contains("rotation")) {
        elements[j].classList.remove("rotation");
      }
      j++;
    }
    this.classList.add("rotation");
  };
}
// image slider

const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
