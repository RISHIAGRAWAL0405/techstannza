var prevScrollpos = window.pageYOffset;
var prevScrollpos1 = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    setTimeout(() => {
      document.querySelector(".nav").style.top = "-60px";
    }, 100);
  }
  prevScrollpos = currentScrollPos;
  if (window.scrollY > 15) {
    document.querySelector(".nav").style.backgroundColor = "white";
    document.querySelector(".nav").style.borderBottom = "0.5px solid lightgrey";
    document.querySelector(".navigation ul").style.color = "black";
    document.querySelector(".home-nav a i").style.color = "black";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
    document.querySelector(".nav").style.borderBottom = "none";
    document.querySelector(".navigation ul").style.color = "white";
    document.querySelector(".home-nav a i").style.color = "white";
  }
};
