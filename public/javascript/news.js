// gsap.from(".image-div img",{width:"0",opacity:0,duration:1,translateX:"300%"
// });

gsap.to(".image-div img",{width:"100%",translateX:0,opacity:1,duration:1});




let brandNames=document.querySelectorAll(".brand-name");


brandNames.forEach((b)=>{
    let name=b.firstElementChild.innerText;
    if(name=="redmi"){
        b.style.backgroundColor="orange";
    } 
    if(name=="realme"){
        b.style.backgroundColor="yellow";
    }
    if(name=="samsung"){
        b.style.backgroundColor="blue";
        b.style.color="white";
    }
    if(name=="oneplus"){
        b.style.backgroundColor="red";
    }
    if(name=="motorola"){
        b.style.backgroundColor="black";
        b.style.color="white";
    } if(name=="vivo"){
        b.style.backgroundColor="blue";
    } if(name=="oppo"){
        b.style.backgroundColor="black";
        b.style.color="white";
    } if(name=="apple"){
        b.style.backgroundColor="black";
        b.style.color="white";
    }
    if(name=="oppo"){

    }

});



let commentButton=document.querySelectorAll(".buttons:nth-of-type(3)");
commentButton.forEach((e)=>{
    let comments=e.parentElement.nextElementSibling;

    e.addEventListener("click",(ev)=>{
           comments.style.display="flex";
           document.querySelector("body").style.overflow="hidden";
           ev.stopPropagation();

    });
});



let closeButton=document.querySelectorAll(".close-btn");
closeButton.forEach((e)=>{
    e.addEventListener("click",()=>{
         let comments=e.parentElement.parentElement;
         comments.style.display="none";

         document.querySelector("body").style.overflowY="scroll";

        
  
    });
});


window.onclick=(event)=>{
   let allCommentSection=document.querySelectorAll(".comments-div");
   allCommentSection.forEach((e)=>{
       if(event.target==e){  
          e.style.display="none";
       }
   });


   document.querySelector("body").style.overflowY="scroll";


};