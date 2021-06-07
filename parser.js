// const Nightmare=require("nightmare");
// const nightmare=Nightmare();




// checkPrice();

// async function checkPrice(){
//    const phonePrice=await  nightmare.goto("https://www.amazon.in/Redmi-Note-Pro-Interstellar-Snapdragon/dp/B077PWBC78/ref=sr_1_1?dchild=1&keywords=Redmi+Note+9+Pro&qid=1621867044&sr=8-1")
//                               .wait("#mbbPopoverLink")
//                               .evaluate(()=>document.querySelector("#mbbPopoverLink").innerText)
//                               .end();  
    
   
//     console.log(phonePrice);

// }



const axios=require("axios").default;


async function checkPrice(){
   let result=await axios.get("https://desolate-badlands-28322.herokuapp.com/");
   console.log(result.data);

}

checkPrice();