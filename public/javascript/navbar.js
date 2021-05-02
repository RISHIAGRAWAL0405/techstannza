var prevScrollpos = window.pageYOffset;
var prevScrollpos1 = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-main").style.top = "0";
  } else {
    document.querySelector(".navbar-main").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  var currentScrollPos1 = window.pageYOffset;
  if (prevScrollpos1 > currentScrollPos1) {
    document.querySelector(".second-nav").style.top = "10px";
  } else {
    document.querySelector(".second-nav").style.top = "-100px";
  }
  prevScrollpos1 = currentScrollPos1;
  


}




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }