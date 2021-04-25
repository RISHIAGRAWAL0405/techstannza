let searchDivision=document.querySelectorAll(".searchResult");
let fake=document.querySelector(".fake");
let inputs=document.querySelectorAll(".mobileInput");
let mobiles=[];


let getmobiles=async()=>{
    let res=await axios.get("https://desolate-badlands-28322.herokuapp.com/axiosMobiles");
    let data=res.data;
    for(mobile of data){
        mobiles.push(mobile);
    }
}
getmobiles();
      
inputs.forEach(input=>{
     input.addEventListener(("input"),()=>{
        fillUp(input);
     })
 })


function fillUp(input){
    let divi=input.nextElementSibling;
    divi.style.display="flex";
    divi.style.flexDirection="column";
    let keys=diffkeys(input.value);
    // console.log(keys)
    
    let response=getrelated(keys);
    deleteChild(divi);
    // console.log(response);
    for(mobile of response){
      let newMobile=fake.cloneNode(true);
      newMobile.childNodes[1].src=mobile.image;
      newMobile.childNodes[3].childNodes[1].innerText=mobile.name;

      newMobile.classList.add("dynamicClass");
      divi.append(newMobile);
    }
    let mobimage=input.parentNode.parentNode.childNodes[3].childNodes[1];
    let className=input.parentElement.parentElement.classList[0];
    let addButtons=document.querySelectorAll(`.${className} .addButton`);
    // console.log(addButtons);
    addButtons.forEach(button => {
        button.addEventListener("click",()=>{
            let mob=getMobile(button);
            mobimage.src=mob.image;
            fillDown(className,mob);
            // console.log(mobimage);
        })
    });
}

function getrelated(keys){
    let response=[];
    let keywords=diffnames(mobiles);
    for(mobile of mobiles){
        for(key of keys){
            // console.log(mobile.name);
            if(mobile.name==key || mobile.name.split(" ").includes(key)){
              if(!response.includes(mobile))
                response.push(mobile);
            }
        }
        
    }
    
   return response;
}  



function getMobile(btn){
    let mobname=btn.previousElementSibling.innerText;
    // let thismob;
    for(mobile of mobiles){
        if(mobile.name===mobname){
            console.log(mobile)
            return mobile;
          
        }
    }
    

}

function deleteChild(e) {
    
    
    
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}


function diffkeys(query){
    return query.split(" ");
}

function diffnames(mobiles){
   let diffnames=[];
  for(mobile of mobiles){
      let respo=diffkeys(mobile.name);
      for(resp of respo){
          diffnames.push(resp);
      }
      
  }
  return diffnames;
}

let mainSection=document.querySelector(".mainSection");

mainSection.addEventListener("click",()=>{
   searchDivision[0].style.display="none";
   searchDivision[1].style.display="none";
   searchDivision[2].style.display="none";
  
})
let all=document.querySelectorAll(".searchResult div")  

all.forEach(element => {
    element.addEventListener("click",(e)=>{
        
       e.stopPropagation();
    })
});




function fillDown(className,mob){
   let whole=document.querySelector(`.${className} .indiDetails`);
   whole.style.opacity=1;
    let frontcamera=document.querySelectorAll(`.${className} .frontcamera td`);
   let display=document.querySelectorAll(`.${className} .display td`);
   let performance=document.querySelectorAll(`.${className} .performance td`);
   frontcamera[0].innerText=mob.frontCamera.pixels[0].pixel+"MP";
   frontcamera[2].innerText=mob.frontCamera.pixels[0].description;
   

}


let buttons=document.querySelectorAll(".customButton");


buttons.forEach(button=>{
   button.addEventListener("click",()=>{
    let className=button.parentElement.parentElement.classList[0];
      removeDown(className);
    })
})


function removeDown(className){
    let whole=document.querySelector(`.${className} .indiDetails`);
    whole.style.opacity=0.2;
    let imageSection=document.querySelector(`.${className} .originalImage`);
    imageSection.src="";
    let frontcamera=document.querySelectorAll(`.${className} .frontcamera td`);
   let display=document.querySelectorAll(`.${className} .display td`);
   let performance=document.querySelectorAll(`.${className} .performance td`);
   frontcamera[0].innerText="";
   frontcamera[2].innerText="";
}