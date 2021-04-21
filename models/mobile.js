const mongoose=require("mongoose");
// const dbUrl=process.env.DB_URL;



// const url = `mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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
    }






   
              
        
           

        
        
    

    
})
const Mobile=mongoose.model("Mobile",mobileSchema); 
module.exports=Mobile;



// const insertMobile=async ()=>{
//     const mobile=new Mobile({name:"redmi note 9 pro",image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618155741/mobiles/Redmi-Note-9-Pro-5G_fujb3r.jpg",price:19999,mainCamera:{noOfCameras:4,pixels:[{pixel:48,description:"nice"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:16,description:"nice"}]},brand:"redmi"});
//     const mobile1=new Mobile({name:"redmi power",price:9999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618156733/mobiles/redmi%209%20power.jpg",mainCamera:{noOfCameras:3,pixels:[{pixel:48,description:"nice"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:8,description:"nice"}]},brand:"redmi"});
//     const mobile2=new Mobile({name:"redmi 10t",price:39999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618156875/mobiles/Xiaomi-Mi-10T-silver_ortwua.webp",mainCamera:{noOfCameras:5,pixels:[{pixel:64,description:"ok"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:25,description:"nice"}]},brand:"redmi"});
       
//     await mobile.save();
//     await mobile1.save();
//     await mobile2.save();
// }




// insertMobile();