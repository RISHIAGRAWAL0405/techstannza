
module.exports.isLoggedIn=(req,res,next)=>{


    if(!req.isAuthenticated()){
        req.session.returnTo=req.originalUrl; 
        req.flash("error","you must be signed in first");
        return res.json("you must be signed in first");      
    }
    next();  
   

};


module.exports.isAdmin=(req,res,next)=>{

    if(req.user.username==="admin"){
      return  next();
    }
    res.send("you must be an admin");
    res.redirect("/");


}