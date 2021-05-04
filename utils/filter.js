let filter=(brand,mcamera,displaySize,features,ram,min,max,mobiles)=>{
    let result=[];                               //this is final filtered mobile array
       
    let brands=[];
    let camera=[],minPixel;
    let rams=[];
    let sizes=[];
    let NFC=features["nfc"];
    let audioJack=features["audio"];
    let IR=features["IR"];
    console.log(NFC,audioJack,IR);

    brands=pushValues(brand,brands);
    rams=pushValues(ram,rams);
    camera=pushValues(mcamera,camera);   minPixel=Math.min(...camera);
    sizes=pushValues(displaySize,sizes);
    if(camera.length==0)
       minPixel=0;   
    if(rams.length==0)
       ifWholeEmpty(ram,rams);
    if(brands.length==0)
       ifWholeEmpty(brand,brands);
    

       result=fillInResult(result,rams,sizes,camera,brands,min,max,mobiles);
    
    
   return result;



   
    
};    






let pushValues=(object,array)=>{
    for(let property in object){
        if(object[property]==true){
             array.push(property);
        }
   }

   console.log("i am in the pushValues")

   return array;
};

let fillInResult=(result,rams,sizes,mcamera,brands,min,max,mobiles)=>{
     
    for(mobile of mobiles){
        if((mobile.price>min && mobile.price<max) && brands.includes(mobile.brand.toLowerCase().trim()) && rams.includes(mobile.memory.ram)){
            if(sizes.length!=0){
              if(sizesFilter(mobile,sizes))
                  result.push(mobile);
            }
            else{
                result.push(mobile);
            }
        }
    }
     
     return result;        
};




let ifWholeEmpty=(object,array)=>{
    for(let property in object)
        array.push(property);
     
      console.log("i am in the ifWholeEmpty");     
     
        return array;   

};

let sizesFilter=(mobile,sizes)=>{
    for(size of sizes){
        console.log(size);
        if(mobile.Display.size<=size && mobile.Display.size>(size-0.25))
          return true;
    }
}




module.exports=filter;
