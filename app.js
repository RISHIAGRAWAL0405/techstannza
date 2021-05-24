if(process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}

                            // ************TRAKIN ZONE************//
const express=require("express");
const app=express();

const ejsMate=require("ejs-mate");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const path=require("path");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const passportLocalStrategy=require("passport-local");
const User=require("./models/user");
const passportGoogleStrategy=require("./passportGoogle");
// const axios=require("axios").default;
// const rp=require("request-promise");
// const cheerio=require("cheerio");
// const htmlparser2=require("htmlparser2");




const ExpressError=require("./utils/Expresserror");
const phoneRoutes=require("./routes/phones");
const homeRoutes=require("./routes/home");
const formRoutes=require("./routes/form");
const bestPhonesRoutes=require("./routes/bestPhones");
const newsRoutes=require("./routes/news");
const rangeRoutes=require("./routes/range");
const specificRoutes=require("./routes/specific");
const voteRoutes=require("./routes/voteRoutes");
const commentRoutes=require("./routes/CommentRoutes");
let authRoutes=require("./routes/userRoutes");
const { html } = require("cheerio/lib/static");

                             //   this is the database connection part
const dbUrl=process.env.DB_URL;
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
    
                        

    
                         //this is the session congiguration object
    const sessionConfig={
    secret:"thisisnotagoodsecret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+1000*60*60*24*7,
        maxAge:   1000*60*60*24*7,
        HttpOnly:true

    }
};

                         //this is setting of the view engine -------> the templating engine
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
                         

                          //these are the middlewares of session,flash,parsing the form body,and passing the local variables to the public 
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use(flash());

app.use(express.static(path.join(__dirname,"public")));  //this is the serving of the public assets



   app.use(passport.initialize());
   app.use(passport.session());
   passport.use(new passportLocalStrategy(User.authenticate()));
   passport.serializeUser(User.serializeUser());
   passport.deserializeUser(User.deserializeUser());
    

   app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
});  


 
                          //this are the routes handlers


let middleReq=((req,res,next)=>{
    console.log(req.originalUrl);
    req.session.returnTo=req.originalUrl;
    next();
});                          



app.get("/css/main.css.map",(req,res)=>{
    console.log(" bha bsdki am in css main route");
    res.redirect("/");
})
app.use("/phone",middleReq,phoneRoutes);
app.use("/form",formRoutes);
app.use("/bestPhones",middleReq,bestPhonesRoutes);
app.use("/range",middleReq,rangeRoutes);
app.use("/news",middleReq,newsRoutes);
app.use("/specific",middleReq,specificRoutes);
app.use("/vote",voteRoutes);
app.use("/news/:id/comment",middleReq,commentRoutes);
app.use("/auth",authRoutes);

app.use("/",middleReq,homeRoutes);


// const url='https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
// rp(url)
//   .then(function(html){
//     //success!
//     console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//   });





//  const getAxiosWorking=async ()=>{
//     try{
//    let result=await axios.get("https://www.amazon.in/Redmi-Note-Pro-Interstellar-Snapdragon/dp/B077PWBC78/ref=sr_1_1?dchild=1&keywords=redmi+note+9+pro&qid=1621852882&sr=8-1");
//     //   console.log(cheerio.load(".priceblock_vat_excl_price" ).html);
//     console.log($("priceblock_vat_excl_price",result));
//     }
//     catch(e){
//         console.log(e);
//     }
//  } 



// const url="https://www.amazon.in/Redmi-Note-Pro-Interstellar-Snapdragon/dp/B077PWBC78/ref=sr_1_1?dchild=1&keywords=redmi+note+9+pro&qid=1621852882&sr=8-1";
//  rp(url)
//  .then(function(html){
//    //success!

//    const dom=htmlparser2.parseDocument(html);
//    const $=cheerio.load(dom);

//   console.log($(".priceblock_vat_excl_price").text());
  
//  })
//  .catch(function(err){
//    console.log(err);
//  });




//  getAxiosWorking();
app.all("*",(req,res,next)=>{
       next(new ExpressError("Page Not Found",404));
});


                        //error handling part
app.use((err,req,res,next)=>{
    const {statusCode=500}=err;
    if(!err.message) err.message="Oh No ): Something went Wrong";
    res.status(statusCode).render("error",{err});
});


                        //this is the listener 
const port=process.env.PORT || 3000;               // this is the port which hosting company uses 
app.listen(port,()=>{
 console.log(`listening in port ${port}`);   
});




