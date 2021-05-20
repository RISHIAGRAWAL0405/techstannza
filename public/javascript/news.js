// gsap.from(".image-div img",{width:"0",opacity:0,duration:1,translateX:"300%"
// });

gsap.to(".image-div img",{width:"100%",translateX:0,opacity:1,duration:1});




    window.onload=()=>{
        let upVoteButtons=document.querySelectorAll(".upvote");

        upVoteButtons.forEach((e)=>{
            let ifVoted=e.getAttribute("data-upvoted");
            if(ifVoted=="true"){
                // e.style.color="white";
                // e.style.backgroundColor="red"
                e.childNodes[1].style.color="red";
            }
        });
        let downVoteButtons=document.querySelectorAll(".downvote");

        downVoteButtons.forEach((e)=>{
            let ifVoted=e.getAttribute("data-downvoted");
            if(ifVoted=="true"){
                // e.style.color="white";
                // e.style.backgroundColor="red"
                e.childNodes[0].style.color="red";
            }
        });
    };
   






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


let upVoteButtons=document.querySelectorAll(".upvote");
upVoteButtons.forEach((e)=>{
   e.addEventListener("click",async()=>{
         let result=await axios.get(`https://desolate-badlands-28322.herokuapp.com/vote/upvote?news=${e.getAttribute("data-news")}`);       
         let data=result.data;
         console.log(data);
         if(data=="you must be signed in first"){
             document.querySelector(".alert-danger").innerText=data;
         }
         else{
             if(data.action=="insert"){
            
               e.childNodes[1].style.color="red";
               e.childNodes[2].innerText=data.upvotes;
             }
             else{
                 if(data.action=="delete"){
                    e.childNodes[1].style.color="black";
                    e.childNodes[2].innerText=data.upvotes;
                 }
                 else{
                     if(data.action=="change"){
                        e.childNodes[1].style.color="red";
                        e.childNodes[2].innerText=data.upvotes;
                        e.nextElementSibling.childNodes[0].style.color="black";
                        e.nextElementSibling.childNodes[2].innerText=data.downvotes;
                     }
                 }
             }
         }
    }) 
});
let downVoteButtons=document.querySelectorAll(".downvote");
downVoteButtons.forEach((e)=>{
   e.addEventListener("click",async()=>{
         let result=await axios.get(`https://desolate-badlands-28322.herokuapp.com/vote/downvote?news=${e.getAttribute("data-news")}`);       
         let data=result.data;
         console.log(data);
         if(data=="you must be signed in first"){
             document.querySelector(".alert-danger").innerText=data;
         }
         else{
             if(data.action=="insert"){
            
               e.childNodes[0].style.color="red";
               e.childNodes[2].innerText=data.downvotes;
             }
             else{
                 if(data.action=="delete"){
                    e.childNodes[0].style.color="black";
                    e.childNodes[2].innerText=data.downvotes;
                 }
                 else{
                     if(data.action=="change"){
                         e.childNodes[0].style.color="red";
                         e.childNodes[2].innerText=data.downvotes;
                         e.previousElementSibling.childNodes[1].style.color="black";
                         e.previousElementSibling.childNodes[2].innerText=data.upvotes;


                     }
                 }
             }
         }
    }) 
})