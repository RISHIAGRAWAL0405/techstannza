const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth").OAuth2Strategy;
const User=require("./models/user");


passport.serializeUser((user,done)=>{
   done(null,user.id);
});


passport.deserializeUser((id,done)=>{
   User.findById(id).then((user)=>{
       done(null,user);
   })
})



passport.use(
    new GoogleStrategy({    //options for google stretegy
        callbackURL:"https://desolate-badlands-28322.herokuapp.com/google/redirect",
        clientID:"461162423697-9vat0q60ogesbk0qk695g6jqqedor3fa.apps.googleusercontent.com",
        clientSecret:"_4bcnMGBvTxv0Ei7kdXBsp3v"


    },(accessToken,refreshToken,profile,done)=>{
       User.findOne({googleId:profile.id}).then((currentUser)=>{
           if(currentUser){
               done(null,currentUser);
           }else{
               new User({username:profile.displayName,email:profile.emails[0].value,googleId:profile.id}).save().then((newUser)=>{
                  console.log(newUser); 
                  done(null,newUser);
               })
           }
       })

    }

));

