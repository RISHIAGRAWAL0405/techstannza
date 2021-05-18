const mongoose=require("mongoose");
const passportLocalmongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email field can not be empty"]
    }


});


userSchema.plugin(passportLocalmongoose);

const User=mongoose.model("User",userSchema);
module.exports=User;