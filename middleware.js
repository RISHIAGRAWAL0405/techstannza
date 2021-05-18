
module.exports.custom=(req,res,next)=>{
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { req.flash("error","username or password is incorrect"); res.redirect('/login');  }
        req.logIn(user, function(err) {
          if (err) {next(err); }
          return next();
        });
      })
};
