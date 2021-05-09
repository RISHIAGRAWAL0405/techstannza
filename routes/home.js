const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/Expresserror');
const Mobile=require("../models/mobileaman");
const News=require("../models/news");





router.get("/",async (req,res)=>{
    const mobiles=await Mobile.find({});

   const stories=await News.find({});    
   req.flash("success","We Got your suggestion,promise we wil Improve");

    res.render("home",{
        mobiles:mobiles,
        home:1,
        stories
    });
});

router.get("/about",(req,res)=>{
    res.render("about",{home:1});
});


router.post("/search",catchAsync(async (req,res)=>{
    const mobiles=await Mobile.find();
    let result=[];
    let {search}=req.body;
    search=search.toLowerCase();
    let different_strings=search.split(" ");
    
    for(let mobile of mobiles){
        
        if(search==mobile.name.toLowerCase() || search==mobile.brand.toLowerCase || ((mobile.name.toLowerCase()).split(" ")).includes(search)){
            result.push(mobile);
        }
    }

    for(let mobile of mobiles){
        for(let strings of different_strings){
            if(strings==mobile.name.toLowerCase() || strings==mobile.brand.toLowerCase()){
                if(!result.includes(mobile)){
                result.push(mobile);
                }
            }
        }
    }
   
    
    res.render("search",{result,home:1,allMobiles:mobiles});
    
   
}));

router.get("/compare",catchAsync(async(req,res)=>{
    const mobiles=await Mobile.find();
    const {mobile}=req.query;

    const mobileFound=await Mobile.findById(mobile);

    
    res.render("comparison",{mobiles,mobileFound});
}));

router.get("/axiosMobiles",async (req,res)=>{
    let mobiles=await Mobile.find();
    res.json(mobiles);
});
router.get("/:id",catchAsync(async (req,res)=>{
    let {id}=req.params;
    let similar=[];
    let mobile=await Mobile.findById(id);


    let mobiles=await Mobile.find();
    for(let each of mobiles){
        if(Math.abs(mobile.price-each.price)<=1000 && mobile.name!=each.name){
           similar.push(each);
        }
    }
    // res.render("content",{mobile,similar})
    res.send(" HEYY!!!  SORRY  Work in Progress")
}));



module.exports=router;