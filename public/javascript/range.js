let rangeinputmin=document.querySelector(".minprice");
let rangeinputmax=document.querySelector(".maxprice");

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
let brandSection={"redmi":false,"one plus":false,"realme":false,"apple":false};
let cameData=[];
allinputs.forEach(input=>{
    input.addEventListener("input",()=>{
        manipulate(input);
        sendData();
        
    });
});



let manipulate=(input)=>{
    if(input.classList[0]=="brand"){
        brandSection[input.id]=input.checked;
    }
    console.log(brandSection);
};

let sendData=async ()=>{
    let res=await axios.post("https://desolate-badlands-28322.herokuapp.com/axiosMobiles",{
        brand:brandSection,
        min:rangenummin.value,
        max:rangenummax.value
    });
    let camedata=res.data;
    fillData(camedata);
    
}


let fillData=(cameData)=>{
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


            

             


          