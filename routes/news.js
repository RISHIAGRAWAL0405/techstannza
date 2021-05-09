const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/Expresserror');
const News=require("../models/news");

router.get("/",async (req,res)=>{
    let allnews=await News.find({});
    res.render("news",{allnews});
});



module.exports=router;
