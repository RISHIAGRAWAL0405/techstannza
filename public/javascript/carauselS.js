let images2=[];


let getmobiles=async ()=>{
    let res=await axios.get("http://localhost:3000/axiosMobiles");
     let allMobiles=res.data;
    
  for(mobiles of allMobiles){
      images2.push(mobiles.image);
  }
// console.log(allMobiles);

    func();
}
getmobiles();



function func() {
  let images1=document.querySelectorAll(".slides1");
let p=0;


const imagesPerSlide=3;


let k;
for(k=0;k<imagesPerSlide;k++){
    images1[k].src=images2[k];
}

console.log(images2);
console.log(images1)
p=k-1;
const outer=document.querySelector(".outer");

let prevImg1=document.querySelector(".prevImg");
let nextImg1=document.querySelector(".nextImg");


prevImg1.addEventListener("click",()=>{
    


    
})

nextImg1.addEventListener("click",()=>{
    
    
    if(p>=(images2.length-1)){
        // i=0;
        let j;
        for(j=0;j<(images1.length-1);j++){
            images1[j].src=images1[j+1].src;
        }
       
        images1[j].src=images2[0];
        p++;
        if(p>=(images2.length-1)){
            p=0;
        }
    }
    else{

       let j;
       for(j=0;j<(images1.length-1);j++){
           images1[j].src=images1[j+1].src;
       }
       
       images1[j].src=images2[p+1];
       p++;
    }
    
    
})
}