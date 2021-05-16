const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Suggestion=require("../models/suggestion");
const Subscriber=require("../models/newsletter");


router.post("/suggestions",catchAsync(async (req,res)=>{
    let {Name,email_id,suggestion,path}=req.body;
    let newSuggestion=new Suggestion({name:Name,email:email_id,suggestion:suggestion});
    await newSuggestion.save();
    req.flash("success","We Got your suggestion,promise we wil Improve");
    res.redirect(`${path}`);
}));
 
router.post("/subscribe",async (req,res)=>{
     let {email_id}=req.body;
     let newSubscriber=new Subscriber({email:email_id});
     await newSubscriber.save();  
     req.flash("success","Hola!! subscribed to the TrakinZone weekly newsletter ");
     res.redirect("/");  
});
 

module.exports=router;