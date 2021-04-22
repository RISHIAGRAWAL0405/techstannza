let divisions=document.querySelectorAll(".outer>div");
let j = 0;
divisions[0].style.display="flex";
let prevImg1 = document.querySelector(".prevImg");
let nextImg1 = document.querySelector(".nextImg");

prevImg1.addEventListener("click", () => {
     prevFunction();
   
})
nextImg1.addEventListener("click", () => {

    nextFunction();
})


setInterval(() => {
  nextFunction();    
}, 6000);


let prevFunction=()=>{
    let k;
    for (k = 0; k < divisions.length; k++) {
        divisions[k].style.display = "none";
    }
    if (j < 1) {
        j = divisions.length - 1;
        divisions[j].style.display = "flex";
    }
    else {
        j--;
        divisions[j].style.display = "flex";

    }
}
let nextFunction=()=>{
    let k;
    for (k = 0; k < divisions.length; k++) {
        divisions[k].style.display = "none";
    }
    if (j >= (divisions.length - 1)) {
        j = 0;
        divisions[0].style.display = "flex";
    }
    else {
        j++;
        divisions[j].style.display = "flex"
    }
}


