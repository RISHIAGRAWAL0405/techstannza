const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/mobile_site', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });




let storySchema=new mongoose.Schema({
   image:{
       type:String,
       required:true
   },
   message:{
       type:String,
       required:true
   },
   wholeNews:{
       type:String,
       required:true
   }


});

let Story=mongoose.model("Story",storySchema);



// let Function=()=>{
//    let story=new Story({image:"https://bgr.com/wp-content/uploads/2019/07/iphone-11-mkbhd.jpg?quality=70&strip=all",message:"new phone going to be launched",wholeNews:"recently apple annouced that they are going launch their new iphone series called iphone SE 2 2020 and in that they are going to announe their new esim feature"});
//    story.save(); 
// }


// Function();


module.exports=Story;