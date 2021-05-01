if(process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}

// mongodb+srv://Atishay:<password>@cluster0.upzac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


const express=require("express");
var bodyParser=require("body-parser");
const app=express();
const ejsMate=require("ejs-mate");
const path=require("path")
const mongoose=require("mongoose");
const Mobile=require("./models/mobileaman");
const ExpressError=require("./utils/Expresserror");
const catchAsync=require("./utils/catchAsync");
const News=require("./models/news");
const session=require("express-session");
const flash=require("connect-flash");
const Suggestion=require("./models/suggestion");
let Subscriber=require("./models/newsletter");

const dbUrl=process.env.DB_URL;

// mongodb://localhost:27017/mobile_site
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    ,useFindAndModify:false
});

const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(bodyParser.json());
// app.use(express.raw());
const sessionConfig={
    secret:"thisisnotagoodsecret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1000*60*60*24*7,
        maxAge:   1000*60*60*24*7,
        HttpOnly:true

    }
}


app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(flash());
app.set('views', path.join(__dirname, 'views'));


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    next();
})
app.use(express.static(path.join(__dirname,"public")));



app.get("/",async (req,res)=>{
    const mobiles=await Mobile.find({});

   const stories=await News.find({});    
   req.flash("success","We Got your suggestion,promise we wil Improve");

    res.render("home",{
        mobiles:mobiles,
        home:1,
        stories
    });
})


app.get("/about",(req,res)=>{
    res.render("about",{home:1});
})

app.get("/phone", function(req, res){
    res.render('phone');
  });

app.post("/search",catchAsync(async (req,res)=>{
    const mobiles=await Mobile.find();
    let result=[];
    let {search}=req.body;
    search=search.toLowerCase();
    let different_strings=search.split(" ");
    
    for(let mobile of mobiles){
        
        if(search==mobile.name || search==mobile.brand || ((mobile.name).split(" ")).includes(search)){
            result.push(mobile);
        }
    }

    for(let mobile of mobiles){
        for(let strings of different_strings){
            if(strings==mobile.name || strings==mobile.brand){
                if(!result.includes(mobile)){
                result.push(mobile);
                }
            }
        }
    }
   
    
    res.render("search",{result,home:1,allMobiles:mobiles});
    
   
}))



app.post("/rangeMobiles",async (req,res)=>{
    const mobiles=await Mobile.find();
    const result=[];
    for(mobile of mobiles){
        if(mobile.price >=req.body.min && mobile.price <=req.body.max){
            result.push(mobile);
        }
    }
    let {min,max}=req.body;
    result.sort((a,b)=>{
        return a.price-b.price;
    })
    res.render("range",{result,min,max,home:1});
})
app.get("/Axios",async (req,res)=>{
    let {q}=req.query;
    
    let mobiles=await Mobile.find();
    let queryRest1=q.split(" ");
    
})

app.get("/compare",catchAsync(async(req,res)=>{
    const mobiles=await Mobile.find();
    const {mobile}=req.query;

    const mobileFound=await Mobile.findById(mobile);

    
    res.render("comparison",{mobiles,mobileFound});
}));

app.post("/phone", function(req, res) {

    const pixMain = [];
    const pixelsMain = req.body.pixelsMain;
    const pixelsMainarray = pixelsMain.split(",");
    for(var i in pixelsMainarray) {
      pixMain.push(JSON.parse(i));
    }
  
    const pixFront = [];
    const pixelsFront = req.body.pixelsFront;
    const pixelsFrontarray = pixelsMain.split(",");
    for(var j in pixelsFrontarray) {
      pixFront.push(JSON.parse(j));
    }

    const colorVariant=[];
    const colorVariants=req.body.colorVariants;
    const colorVariantsArray=colorVariants.split(",");
    for(let i in colorVariantsArray){
        colorVariant.push(JSON.parse(i));
    } 
  
  
  
    var Phone = new Mobile({
      name: req.body.name,
      price: req.body.Price,
      mainCamera: {
        noOfCameras: req.body.noOfCamerasMain,
        pixels:[pixMain]
      },
      frontCamera: {
        noOfCameras: req.body.noOfCamerasFron,
        pixels:[pixFront]
      },
      Display: {
        size: req.body.DisplaySize ,
        resolution: req.body.DisplayResolution ,
        GPU: req.body.DisplayGPU ,
        category: req.body.DisplayType
      },
      processor: {
        operatingSystem: req.body.operatingSystem ,
        category: req.body.ProcessorCategory ,
        Core: req.body.Core,
        clockSpeed: req.body.clockSpeed
      },
      memory: {
        internalStorage: req.body.internalStorage ,
        ram: req.body.ram ,
        expandableStorage: req.body.expandableStorage
      },
      network: {
        category: req.body.networkCategory ,
        bluetoothVersion: req.body.bluetoothVersion ,
        nfc: req.body.nfc,
        infrared: req.body.infrared,
        audioJack: req.body.audioJack
      },
      Dimensions: {
        width: req.body.width,
        height: req.body.height,
        weight: req.body.weight,
      },
      BatteryCapacity: req.body.BatteryCapacity ,
      warrantyPeriod: req.body.warrantyPeriod ,
      userInterface: req.body.userInterface ,
      Box: req.body.box,
      colorVariants: [colorVariant] ,
      bodyType: req.body.bodyType,
      review: req.body.review,
      ourOpinion: req.body.ourOpinion,
      brand: req.body.brand ,
      image: req.body.image ,
      launchDate: req.body.launchDate,
      sound: req.body.sound,
      simType: req.body.simType
    });
  
    console.log(Phone);
  
    
  
    Phone.save(function(err){
      if(err){
        console.log(err);
      }
    });
    res.redirect('/phone');
  });
app.get("/younhi",(req,res)=>{
    res.render("form");
})
app.post("/younhi",(req,res)=>{
    console.log((req.body.pixels[0]));
})


app.post("/suggestions",catchAsync(async (req,res)=>{
   let {Name,email_id,suggestion,path}=req.body;
   let newSuggestion=new Suggestion({name:Name,email:email_id,suggestion:suggestion});
   await newSuggestion.save();
   req.flash("success","We Got your suggestion,promise we wil Improve");
   res.redirect(`${path}`);
}));
app.post("/subscribe",async (req,res)=>{
    let {email_id}=req.body;
    let newSubscriber=new Subscriber({email:email_id});
    await newSubscriber.save();  
    req.flash("success","Hola!! subscribed to the TrakinZone weekly newsletter ");
    res.redirect("/");  
})


app.post("/axiosMobiles",catchAsync(async (req,res)=>{
    // const mobiles=await Mobile.find();
    // console.log(req.body);
    let result=[];
    let {brand,min,max}=req.body;
    let brands=[];
    console.log(brand);
    console.log(min,max);
    for(let property in brand){
         if(brand[property]==true){
              brands.push(property);
         }
    }
    
    let mobiles=await Mobile.find({});
    for(mobile of mobiles){
        if(mobile.price>=min && mobile.price<=max){
        
                if(brands.includes(mobile.brand)){
                    result.push(mobile);
                }
                if(brands.length==0){
                    result.push(mobile);
                }
            
            
        }
        
    }
    console.log(mobiles);
    res.json(result);

   
    

}));
app.get("/axiosMobiles",async (req,res)=>{
    const mobiles=await Mobile.find();
    
    res.json(mobiles);

});

app.get("/deals", async function(req, res){
   let foundPhones=await Mobile.find({topDeal:true});
   res.render("deals",{foundPhones});

  });


app.get("/axiosMobiles/:min/:max",async (req,res)=>{
    const mobiles=await Mobile.find();
    const result=mobiles.filter((m)=>m.price>=req.params.min && m.price<=req.params.max);
    
    
    res.json(result);

    
})
app.get("/news",async (req,res)=>{
    let allnews=await News.find({});
    res.render("news",{allnews});
})

app.get("/:id",catchAsync(async (req,res)=>{
    let {id}=req.params;
    let similar=[];
    let mobile=await Mobile.findById(id);


    let mobiles=await Mobile.find();
    for(let each of mobiles){
        if(Math.abs(mobile.price-each.price)<=1000 && mobile.name!=each.name){
           similar.push(each);
        }
    }
    res.render("content",{mobile,similar})
}))


app.all("*",(req,res,next)=>{
       next(new ExpressError("Page Not Found",404));
})


// app.use((err,req,res,next)=>{
//     const {statusCode=500}=err;
//     if(!err.message) err.message="Oh No ): Something went Wrong";
//     res.status(statusCode).render("error",{err});
// })

const port=process.env.PORT || 3000;
app.listen(port,()=>{
 console.log(`listening in port ${port}`);   
})
