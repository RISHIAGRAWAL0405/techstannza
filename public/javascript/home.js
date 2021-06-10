var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", () => {
  setLeftValue();

  actualForm.min.value = inputLeft.value;
});
inputRight.addEventListener("input", () => {
  setRightValue();

  actualForm.max.value = inputRight.value;
});

inputLeft.addEventListener("mouseover", () => {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", () => {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", () => {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", () => {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", () => {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", () => {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", () => {
  thumbRight.classList.remove("active");
});

let actualForm = document.querySelector(".range-form");

actualForm.min.value = inputLeft.value;
actualForm.max.value = inputRight.value;

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.3,
  spaceBetween: 15,
  centeredSlides: true,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let ratings = document.querySelectorAll(".rating");

ratings.forEach(async (e) => {
  let i = 0;
  window.addEventListener("scroll", () => {
    if (e.getBoundingClientRect().top <= 750) {
      if (i == 0) {
        var bar = new ProgressBar.Circle(e, {
          color: "#000",
          trailColor: "#dfeeea",
          trailWidth: 10,
          duration: 1400,
          easing: "easeInOut",
          strokeWidth: 10,
          from: { color: "#FFEA82", a: 0 },
          to: { color: "#289672", a: 1 },

          step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
          },
        });
        bar.animate(0.7, { duration: 1500 });
        i++;
      }
    }

    if (
      document.querySelector(".subscribe").getBoundingClientRect().top <= 600
    ) {
      document.querySelector(".dynamic-mail").classList.add("mail-anim");
    }
  });
});

gsap.from(".subscribe-message", {
  scrollTrigger: ".subscribe",
  x: 1000,
  opacity: 0,
  duration: 2,
});

gsap.from("#feature-illu", {
  scrollTrigger: "#feature-illu",
  opacity: 0,
  scale: 1.3,
  duration: 2,
});
gsap.from("#saving_money", {
  scrollTrigger: {
    trigger: ".phone-finder",
  },
  scale: 1.3,
  opacity: 0,
  duration: 1,
});

gsap.from(".each", {
  scrollTrigger: ".each",
  scale: 1.1,
  opacity: 0,
  duration: 1,
});

gsap.from(".news-card", {
  scrollTrigger: ".news-card",
  scale: 1.1,
  opacity: 0,
  duration: 1,
});

document.querySelectorAll(".buy-hover").forEach(function (e) {
  e.addEventListener("mouseover", function () {
    console.log(this.childNodes[3]);

    gsap.to(this.childNodes[3], {
      display: "flex",
      opacity: 0,
      duration: 1,
    });
    this.childNodes[3].style.opacity = 1;
  });
});