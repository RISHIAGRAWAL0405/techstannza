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



const ExpressError=require("./utils/Expresserror");
const phoneRoutes=require("./routes/phones");
const homeRoutes=require("./routes/home");
const formRoutes=require("./routes/form");
const bestPhonesRoutes=require("./routes/bestPhones");
const newsRoutes=require("./routes/news");
const rangeRoutes=require("./routes/range");
const specificRoutes=require("./routes/specific");


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

app.use("/phone",phoneRoutes);
app.use("/form",formRoutes);
app.use("/bestPhones",bestPhonesRoutes);
app.use("/range",rangeRoutes);
app.use("/news",newsRoutes);
app.use("/specific",specificRoutes);

app.use("/",homeRoutes);


                          
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
