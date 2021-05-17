const express=require("express");
const router=express.Router;
const passport=require("passport");
const User=require("../models/user");

router.get("/register",(req,res)=>{
    res.render("/register");
});
router.post("/register",async (req,res,next)=>{
   try{
      let {username,password,email}=req.body;
      let user=new User({username:username,email:email});
      let newUser=await User.register(user,password);
      req.login(newUser,err=>{
          if(err) return next(err);
          req.flash("success","welcome to Trakin Zone");
          res.redirect("/");
      });
      
   }
   catch(e){
       req.flash("error",e.message);
       res.redirect("/register");   
   }
});


router.get("/login",(req,res)=>{
    res.render("/login");
});
router.post("/login",passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),(req,res)=>{
  req.flash("success","welcome back!");
//   const redirectUrl=req.session.returnTo || "/campgrounds"; 
//   delete req.session.returnTo;

  res.redirect("/");

});

router.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","GOOD Bye!! see you soon");
    res.redirect("/");
})





module.exports=router;