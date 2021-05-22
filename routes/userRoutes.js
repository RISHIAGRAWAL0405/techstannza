const express=require("express");
const router=express.Router();
const passport=require("passport");
const User=require("../models/user");


router.get("/register",(req,res)=>{
    res.render("register");
});
router.post("/register",async (req,res,next)=>{
   try{
      let {username,password,email}=req.body;
      let user=new User({username:username,email:email});
      let newUser=await User.register(user,password);
      req.login(newUser,err=>{
          if(err) return next(err);
          req.flash("success","welcome to Trakin Zone");
          res.json(req.user.username);
      });
      
   }
   catch(e){
    //    req.flash("error",e.message);
       res.json(e.message);   
   }
});

router.post("/login",passport.authenticate("local",{failureFlash:true,failureRedirect:"/auth/fail"}),(req,res)=>{
  req.flash("success","welcome back!");
  const user_data={"id":req.user._id,"name":req.user.username};
  res.json(user_data);

});



router.get("/google",passport.authenticate("google",{
    scope:["profile","email"]
}));

router.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","GOOD Bye!! see you soon");
    res.redirect("/");
});

//callback route for google strategy
router.get("/google/redirect",passport.authenticate("google"),(req,res)=>{
     console.log(req.session);
    res.redirect(req.session.returnTo);
});


router.get("/fail",(req,res)=>{
   res.json("incorrect username or password");
})






module.exports=router;