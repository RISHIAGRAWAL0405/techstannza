let images = document.querySelectorAll(".slides");
let i = 0;
images[0].classList.add("show");
images[0].style.opacity=1;
let prevImg = document.querySelector(".prev");
let nextImg = document.querySelector(".next");

prevImg.addEventListener("click", () => {
     prevfunction();
   
})
nextImg.addEventListener("click", () => {

    nextfunction();
})


setInterval(() => {
  nextfunction();    
}, 4000);


let prevfunction=()=>{
    let j;
    for (j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }
    if (i < 1) {
        i = images.length - 1;
        images[i].style.display = "block";
        
    }
    else {
        i--;
        images[i].style.display = "block";

    }
}
let nextfunction=()=>{
    let j;
    for (j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }
    if (i >= (images.length - 1)) {
        i = 0;
        images[0].style.display = "block";
    }
    else {
        i++;
        images[i].style.display = "block"
    }
}


