const express=require("express");
const router=express.Router();
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Mobile=require("../models/mobileaman");




router.get("/",async(req,res)=>{
   res.render("phone");
})


router.post("/",async(req,res)=>{
   

        const pixMain = [];
        const pixelsMain = req.body.pixelsMain;
        const pixelsMainarray = pixelsMain.split("/");
        // console.log(pixelsMainarray.length, "arr main");
        pixelsMainarray.forEach(function(i){
          pixMain.push(JSON.parse(i));
        });
        // console.log(pixMain);
      
        const pixFront = [];
        const pixelsFront = req.body.pixelsFront;
        const pixelsFrontarray = pixelsFront.split("/");
        pixelsFrontarray.forEach(function(j){
          pixFront.push(JSON.parse(j));
        });
      
      
        var Phone = new Mobile({
          mainCamera: {
            noOfCameras: req.body.noOfCamerasMain,
            pixels:pixMain
          },
          frontCamera: {
            noOfCameras: req.body.noOfCamerasFront,
            pixels:pixFront
          },
          Display: {
            size: req.body.DisplaySize ,
            resolution: req.body.DisplayResolution ,
            GPU: req.body.DisplayGPU ,
            category: req.body.DisplayType,
            other: req.body.DisplayOther
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
          colorVariants: req.body.colorVariants ,
          name: req.body.name,
          price: req.body.price,
          BatteryCapacity: req.body.BatteryCapacity ,
          warrantyPeriod: req.body.warrantyPeriod ,
          userInterface: req.body.userInterface ,
          box: req.body.box,
          bodyType: req.body.bodyType,
          review: req.body.review,
          ourOpinion: req.body.ourOpinion,
          brand: req.body.brand ,
          image: req.body.image ,
          launchDate: req.body.launchDate,
          sound: req.body.sound,
          simType: req.body.simType
        });
      
        //console.log(Phone);
      
       await Phone.save();
        res.redirect('/phone');
    
});

module.exports=router;