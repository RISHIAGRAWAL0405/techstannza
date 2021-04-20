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
const Mobile=require("./models/mobile");
const ExpressError=require("./utils/Expresserror");
const catchAsync=require("./utils/catchAsync");
const Story=require("./models/stories");
const { inflate } = require("zlib");
const dbUrl=process.env.DB_URL || "mongodb://localhost:27017/mobile_site";

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



app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));

// app.use(express.bodyParser());

app.use(express.static("public"));
app.get("/",async (req,res)=>{
    const mobiles=await Mobile.find({});

   const stories=await Story.find({});    
   // console.log(mobiles);
    res.render("home",{
        mobiles:mobiles,
        home:1,
        stories
    });
})

app.get("/phone",(req,res)=>{
    res.send("HII");

})
app.get("/about",(req,res)=>{
    res.render("aboutus",{home:1});
})

app.post("/search",catchAsync(async (req,res)=>{
    const mobiles=await Mobile.find();
    let result=[];
    let {search}=req.body;
    let different_strings=search.split(" ");
    
    for(let mobile of mobiles){
        console.log(mobile.name);
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

    
    res.render("search",{result,home:1});
    
   
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


app.get("/compare",catchAsync(async(req,res)=>{
    const mobiles=await Mobile.find();
    const brands=mobiles.map(m=>m.brand);
    const names=mobiles.map(m=>m.name);
    res.render("comparison",{brands,names,mobiles});
}));


app.post("/suggestions",(req,res)=>{
   const result=req.body;
   console.log(result);
})



app.post("/axiosMobiles",async (req,res)=>{
    const mobiles=await Mobile.find();
    

});
app.get("/axiosMobiles",async (req,res)=>{
    const mobiles=await Mobile.find();
    // console.log(mobiles);
    // console.log(req.body);
    res.json(mobiles);

});


app.get("/axiosMobiles/:min/:max",async (req,res)=>{
    const mobiles=await Mobile.find();
    const result=mobiles.filter((m)=>m.price>=req.params.min && m.price<=req.params.max);
    // console.log(req.params.min);
    
    res.json(result);

    
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


app.use((err,req,res,next)=>{
    const {statusCode=500}=err;
    if(!err.message) err.message="Oh No ): Something went Wrong";
    res.status(statusCode).render("error",{err});
})

const port=process.env.PORT || 3000;
app.listen(port,()=>{
 console.log(`listening in port ${port}`);   
})
