const User = require("../models/user.js")

module.exports.rendersignUpForm=(req,res)=>{
    res.render("./users/signup.ejs")
}

module.exports.singUp = async (req, res, next) => {
    try {
         console.log("BODY:", req.body); // 👈 ADD THIS
        let { username, email, password } = req.body;

        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        console.log(registeredUser);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); 
            }
            req.flash("success", "welcome to Wonderlust!");
            res.redirect("/listings");
        });

    } catch (e) {
        console.log("ERROR:", e); // 👈 ADD THIS
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderloginForm = (req,res)=>{
    res.render("./users/login.ejs")
}

module.exports.login =async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);}

module.exports.logOut = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    });
}