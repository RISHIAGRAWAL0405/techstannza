let rangeinputmin=document.querySelector(".minprice");
let rangeinputmax=document.querySelector(".maxprice");
let filterSection=document.querySelector(".filtervalues");
let rangenummin=document.querySelector(".minpricenum");

let rangenummax=document.querySelector(".maxpricenum");
rangeinputmin.addEventListener("input",()=>{
    rangenummin.value=rangeinputmin.value;
})

rangeinputmax.addEventListener("input",()=>{
  rangenummax.value=rangeinputmax.value;
})

rangenummin.addEventListener("input",()=>{
 rangeinputmin.value=rangenummin.value;
})
 
 
 AOS.init();


let inputs=[];
let filteredResult=document.querySelector(".filteredresult")
let fake=document.querySelector(".fake");
let allinputs=document.querySelectorAll(".filtervalues input");
let brandSection={"redmi":false,"one plus":false,"realme":false,"apple":false,"vivo":false,"xiaomi":false,"oppo":false,"motorola":false,"asus":false,"huawei":false,"samsung":false};
let ramSection={"3":false,"4":false,"6":false,"8":false,"12":false};
let mcamera={"30":false,"25":false,"20":false,"15":false,"10":false,"5":false};
let displaySize={"7.5":false,"7":false,"6.75":false,"6.5":false,"6.25":false,"6":false,"5.75":false,"5.5":false};
let features={"nfc":false,"IR":false,"audio":false,"fm":false};



let cameData=[];
allinputs.forEach(input=>{
    input.addEventListener("input",()=>{
        manipulate(input);
        sendData();
        
        setTimeout(()=>{
            filteredResult.classList.add("animate");
        },100);
        
        filteredResult.classList.remove("animate");
        
         
    });
});



let manipulate=(input)=>{
    if(input.classList[0]=="brand"){
        brandSection[input.id]=input.checked;
    }
    if(input.classList[0]=="ram"){
        ramSection[input.id]=input.checked;
    }
    if(input.classList[0]=="mcamera"){
        mcamera[input.id]=input.checked;
    }
    if(input.classList[0]=="screensize"){
        displaySize[input.id]=input.checked; 
    }
    if(input.classList=="features"){
         features[input.id]=input.checked;
    }
    // console.log(mcamera);
    // console.log(brandSection);
    // console.log(ramSection);
    // console.log(features);
};
let mobiles;
let sendData=async ()=>{
    let res=await axios.post("https://desolate-badlands-28322.herokuapp.com/axiosMobiles",{
        brand:brandSection,
        ram:ramSection,
        mcamera:mcamera,
        features:features,
        displaySize:displaySize,
        min:rangenummin.value,
        max:rangenummax.value
    });
    let camedata=res.data;
    fillData(camedata);
    console.log(camedata);
    mobiles=[...camedata];
};


let fillData=(cameData)=>{
    console.log(cameData);
    deleteChild(filteredResult)
    for(let i=0;i<cameData.length;i++){
        let newMobile=fake.cloneNode(true);
       newMobile.classList.remove("d-none");
       newMobile.childNodes[1].childNodes[1].childNodes[1].src=cameData[i].image;
       newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText=cameData[i].name;
       newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[9].childNodes[1].href=`/${cameData[i]._id}`
       newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[9].childNodes[3].href=`/compare/?mobile=${cameData[i]._id}`
       newMobile.childNodes[1].childNodes[3].childNodes[1].childNodes[3].innerText+=cameData[i].price;

       filteredResult.append(newMobile);
    }
}










function deleteChild(e) {
    
    
    
    let child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}



let filtervalues=document.getElementsByTagName("main");

function myFunction(){
    var intElemScrollTop = filtervalues.scrollTop;
    console.log(intElemScrollTop);
}

            






          