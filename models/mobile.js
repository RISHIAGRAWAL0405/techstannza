const mongoose=require("mongoose");
// const dbUrl=process.env.DB_URL;



// const url =;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })



const mobileSchema=new mongoose.Schema({
    
    
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mainCamera:{
        noOfCameras:{
          type:Number,
          required:true     
        },
        pixels:[
            {
                pixel:{
                    type:Number,
                    required:true
                },
                description:{
                    type:String,
                    required:true
                }
       
     
            }
        ]
    },
    frontCamera:{
            noOfCameras:{
              type:Number,
              required:true     
            },
            pixels:[
                {
                    pixel:{
                        type:Number,
                        required:true
                    },
                    description:{
                        type:String,
                        required:true
                    }
           
         
                }
            ],
    },
    brand:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        required:true
    },
    launchDate:{
        type:Date,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
    ourReview:{
        type:String,
        // required:true
    },
    topDeal: Boolean






   
              
        
           

        
        
    

    
})
const Mobile=mongoose.model("Mobile",mobileSchema); 
module.exports=Mobile;



// const insertMobile=async ()=>{
//     const mobile=new Mobile({name:"iphone 12 pro max",image:"https://res.cloudinary.com/donu29xwi/image/upload/v1619075899/mobiles/iiiii12pro_max_eoeqme.png",price:111000,mainCamera:{noOfCameras:3,pixels:[{pixel:13,description:"very good wide angle lens"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:8,description:"nice"}]},brand:"apple"});
//     const mobile1=new Mobile({name:"realme narzo 30 pro",price:14999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1619076043/mobiles/realme-narzo-1614154322_m1sqxc.jpg",mainCamera:{noOfCameras:4,pixels:[{pixel:64,description:"nice"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:25,description:"nice"}]},brand:"realme"});
//     const mobile2=new Mobile({name:"realme x50 pro",price:39999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1619076197/mobiles/x50pro_rjfjjq.jpg",mainCamera:{noOfCameras:5,pixels:[{pixel:64,description:"ok"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:25,description:"nice"}]},brand:"realme"});
//     const mobile3=new Mobile({name:"samsung galaxy s21 ultra",price:78000,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1619076121/mobiles/samsung_galxy_s21_o5pvlw.jpg",mainCamera:{noOfCameras:4,pixels:[{pixel:64,description:"ok"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:16,description:"nice"}]},brand:"samsung"});
//     const mobile4=new Mobile({name:"one plus 9 pro",price:40000,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1619075961/mobiles/OnePlus-9-Pro-5G-renders_q2801j.jpg",mainCamera:{noOfCameras:4,pixels:[{pixel:64,description:"ok"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:16,description:"nice"}]},brand:"one plus"});

       
//     await mobile.save();
//     await mobile1.save();
//     await mobile2.save();
//     await mobile3.save();
//     await mobile4.save();
// }




// insertMobile();