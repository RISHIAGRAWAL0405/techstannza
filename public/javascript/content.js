// **********image change on hover*********


let images=document.querySelectorAll(".images-inner img");
let image=document.querySelector(".image-div img");
images[0].style.border="2px solid blue";
images.forEach((i)=>{
    i.addEventListener("mouseover",()=>{
         images.forEach((im)=>{
            im.style.border="none";
        })

        setTimeout(()=>{
            image.src=i.src;
        },200);
        
        
        i.style.border="2px solid blue";

       
    })
   
   
});

// ********share Button functionality**********
let shareBox=document.querySelector(".share-button");
let shareSpan=document.querySelector(".share-button span");
let str=window.location.href;

shareBox.addEventListener("click",()=>{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    shareSpan.innerText="copied!";
    shareSpan.style.color="white";
    shareSpan.parentElement.style.backgroundColor="green";
});



// **********animation Part*********
AOS.init();


    gsap.to(".sunflower",{translateX:"0",opacity:1,duration:1,stagger:{
      translateX:"100px",
      from:"end",
      amount:1.5
    }});



    let animationForMore=gsap.to(".more",{duration:1,opacity:1,height:"1000px",
        stagger:{
            from:"end",
            amount:1
        },
        
       
    })

    animationForMore.pause();



   
   

//the more button functionality
    let more=document.querySelector(".more");
    let spanButton=document.querySelector(".moreButton");
    function expand(){
     
      if(more.style.display=="flex"){
          
           more.style.display="none";
           spanButton.innerText="more"; 
      } 
      else{      
            
           animationForMore.restart(); 
        //    animationForMore.pause();
           more.style.display="flex";

            spanButton.innerText="close"; 
      }
          
    };




//  *********canvas drawing********? 





document.onload=draw();
  

function draw(){
    let canvas=document.querySelector("#points");
    let wWidth=()=>window.innerWidth;
    let cWidth=()=>canvas.width/4;

   let ctx=canvas.getContext("2d");
   canvas.width=window.innerWidth*0.6;
   window.onresize=()=>{
     canvas.width=window.innerWidth*0.6;
     let x=1;
     let constant=3*(Math.PI/2)-x*(Math.PI/5);
     ctx.beginPath();
     ctx.arc(cWidth()/2,80,30,0,Math.PI*2);
     ctx.moveTo(3/2*cWidth()+30,80);
     ctx.arc(3/2*cWidth(),80,30,0,Math.PI*2);
     ctx.moveTo(5/2*cWidth()+30,80);
     ctx.arc(5/2*cWidth(),80,30,0,Math.PI*2); 
     ctx.moveTo(7/2*cWidth()+30,80);
     ctx.arc(7/2*cWidth(),80,30,0,Math.PI*2);
     ctx.strokeStyle="lightgrey";
     ctx.lineWidth=5;
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(cWidth()/2,50);
     ctx.arc(cWidth()/2,80,30,Math.PI*3/2,constant,true);
     ctx.moveTo(3/2*cWidth(),50);
     ctx.arc(3/2*cWidth(),80,30,Math.PI*3/2,constant,true);
     ctx.moveTo(5/2*cWidth(),50);
     ctx.arc(5/2*cWidth(),80,30,Math.PI*3/2,constant,true);
     ctx.moveTo(7/2*cWidth(),50);
     ctx.arc(7/2*cWidth(),80,30,Math.PI*3/2,constant,true);
     ctx.strokeStyle='green';
     ctx.lineWidth=5;
     ctx.stroke();
     
     
   }

   
   
  
   let x=1;
   let constant=3*(Math.PI/2)-x*(Math.PI/5);
   ctx.beginPath();
   ctx.arc(cWidth()/2,80,30,0,Math.PI*2);
   ctx.moveTo(3/2*cWidth()+30,80);
   ctx.arc(3/2*cWidth(),80,30,0,Math.PI*2);
   ctx.moveTo(5/2*cWidth()+30,80);
   ctx.arc(5/2*cWidth(),80,30,0,Math.PI*2); 
   ctx.moveTo(7/2*cWidth()+30,80);
   ctx.arc(7/2*cWidth(),80,30,0,Math.PI*2);
   ctx.strokeStyle="lightgrey";
   ctx.lineWidth=5;
   ctx.stroke();
   ctx.beginPath();
   ctx.moveTo(cWidth()/2,50);
   ctx.arc(cWidth()/2,80,30,Math.PI*3/2,constant,true);
   ctx.moveTo(3/2*cWidth(),50);
   ctx.arc(3/2*cWidth(),80,30,Math.PI*3/2,constant,true);
   ctx.moveTo(5/2*cWidth(),50);
   ctx.arc(5/2*cWidth(),80,30,Math.PI*3/2,constant,true);
   ctx.moveTo(7/2*cWidth(),50);
   ctx.arc(7/2*cWidth(),80,30,Math.PI*3/2,constant,true);
   ctx.strokeStyle='green';
   ctx.lineWidth=5;
   ctx.stroke();
   

   
   
   

    


   
   


}


let canvas=document.querySelector("#points");







