// jshint esversion:8
//

const mongoose=require("mongoose");


// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }
// mongoose.connect("mongodb+srv://Atishay:WMTU4NnUcnka5rm6@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })



const mobileSchema=new mongoose.Schema({

    name:{
        type:String,
        //required:true
    },
    price:{
        type:Number,
        //required:true
    },
    mainCamera:{
        noOfCameras:{
          type:Number,
          //required:true
        },
        pixels:[
            {
                pixel:{
                    type:Number,
                },
                description:{
                    type:String,
                }
            }
        ]
    },
    frontCamera:{
        noOfCameras:{
          type:Number,
          //required:true
        },
        pixels:[
            {
                pixel:{
                    type:Number
                },
                description:{
                    type:String
                }
            }
        ],
    },
    brand:{
        type:String,
        //required:true
    },
    image:{
        type:String,
        //required:true
    },
    launchDate:{
        type:Date,
        //required:true
    },
    sound:{
        type:String
    },
    simType:{
        type:String
    },
    Display:{
        size:String,
        resolution:String,
        GPU:String,
        category:String,
        other:String
    },
    processor:{
        operatingSystem:String,     //Android 10
        category:String,               //mediatek dimensity 800U
        Core:String,               //octa core
        clockSpeed:String,         //2.4GHz
    },
    memory:{
        internalStorage:String,
        ram:String,
        expandableStorage:String,
    },
    network:{
        category:String,
        bluetoothVersion:String,
        nfc:String,
        infrared:String,
        audioJack:String,
    },
    BatteryCapacity:String,
    Dimensions:{
        width:Number,
        height:Number,
        weight:Number
    },
    warrantyPeriod:Number,
    userInterface:String,
    Box:String,
    colorVariants:[
        {
            category:String
        }
    ],
    bodyType:String,
    review:String,
    ourOpinion:String
























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




//
//
// const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/mobile_site', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });
//
// const db = mongoose.connection;
//
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });
//
//
// const mobileSchema=new mongoose.Schema({
//   // _id: String,
//   name:{
//     type:String,
//     // //required:true
//   },
//   price:{
//       type:Number,
//       // //required:true
//   },
//   mainCamera:{
//     noOfCameras:{
//       type:Number,
//       // //required:true
//     },
//     pixels:[
//       {
//         pixel:{
//           type:Number,
//           // //required:true
//         },
//         description:{
//           type:String,
//           // //required:true
//         }
//       }
//     ]
//   },
//   frontCamera:{
//     noOfCameras:{
//       type:Number,
//       // //required:true
//     },
//     pixels:[
//       {
//         pixel:{
//             type:Number,
//             // //required:true
//         },
//         description:{
//             type:String,
//             // //required:true
//         }
//       }
//     ],
//   },
//   brand:{
//     type:String,
//     // //required:true
//   },
//   image:{
//     type:String,
//     // //required:true
//   },
//   launchDate:{
//     type:String,
//     // //required:true
//   },
//   os: String,//	Android
//   ram: Number,//	6 GB
//   ProductDimensions: String, //16.6 x 0.9 x 7.7 cm; 209 Grams
//   Batteries: String,//	1 Lithium Polymer batteries required. (included)
//   //Item model number	Redmi Note 9 Pro Max (6GB+64GB)
//   WirelessCommunicationTechnologies:String,//	Bluetooth, WiFi Hotspot
//   ConnectivityTechnologies:String,//	Wifi
//   SpecialFeatures: String,//	Dual SIM, Infrared, E-mail, Accelerometer, Ambient light sensor, Gyroscope, GPS, Video Player, Music Player, Proximity sensor
//   DisplayTechnology:String,//	AMOLED
//   OtherDisplayFeatures:String,//	Wireless
//   DeviceInterface :String,//	Touchscreen
//   AudioJack:Number,//	3.5 mm
//   Colour:String,//	Champagne Gold
//   BatteryPowerRating:Number,//	5020
//   PhoneTalkTime:Number,//	29 Hours
//   PhoneStandbyTimeWithData:Number,//	492 Hours
//   WhatsInTheBox:	String,//Handset, Power Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide, Clear Soft Case, Screen Protector Pre-Applied On the Phone
//   Manufacturer:String,//	Redmi
//   CountryOfOrigin:String,//India
//   ItemWeight:Number,//
//   ourReview:{
//     type:String,
//     // //required:true
//   },
//   topDeal: Boolean
// });
// const Mobile=mongoose.model("Mobile",mobileSchema);
// module.exports=Mobile;
//
// // const insertMobile=async ()=>{
// //     const mobile=new Mobile({name:"redmi note 9 pro",image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618155741/mobiles/Redmi-Note-9-Pro-5G_fujb3r.jpg",price:19999,mainCamera:{noOfCameras:4,pixels:[{pixel:48,description:"nice"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:16,description:"nice"}]},brand:"redmi"});
// //     const mobile1=new Mobile({name:"redmi power",price:9999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618156733/mobiles/redmi%209%20power.jpg",mainCamera:{noOfCameras:3,pixels:[{pixel:48,description:"nice"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:8,description:"nice"}]},brand:"redmi"});
// //     const mobile2=new Mobile({name:"redmi 10t",price:39999,image:"https://res.cloudinary.com/donu29xwi/image/upload/v1618156875/mobiles/Xiaomi-Mi-10T-silver_ortwua.webp",mainCamera:{noOfCameras:5,pixels:[{pixel:64,description:"ok"}]},frontCamera:{noOfCameras:1,pixels:[{pixel:25,description:"nice"}]},brand:"redmi"});
//
// //     await mobile.save();
// //     await mobile1.save();
// //     await mobile2.save();
// // }
//
// // insertMobile();
