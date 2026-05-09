const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// app.use("/user", user);
// app.use("/post", post);

const sessionOptions = {
        secret: 'your secret key',
        resave: false,             // Don't save session if unmodified
        saveUninitialized: true    // Save new sessions
};
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;

    if(name === "anonymous"){
        req.flash("error", "user not registered");
    } else{
        req.flash("success", "user registered successfully");
    }

    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
   
    res.render("page.ejs",{ name:req.session.name });;
});
app.get("/test",(req,res)=>{
    res.send("test successful!");
});
// app.get("/reqcount",(req,res)=>{
//     if( req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count =1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// })
app.listen(3000, ()=>{
    console.log("server is listening to 3000");
});


// app.use(cookieParser("secretcode"));
// const cookieParser = require("cookie-parser");
// app.get("/greet",(req,res)=>{
    //     let{name ="anonymous"} = req.cookies;
    //     res.send(`Hi , ${name}`);
// });

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("hi,i am root");
//     });

// //send signed cookie
// app.get("/getsingedcookies",(req,res)=>{
//     res.cookie("made-in","India",{signed: true});
//     res.send("signed cookie sent");
//     });

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
//     });


// app.get("/getcookies",(req,res)=>{
//     res.cookie("greet","hello");
//     res.cookie("made","india");
//     res.send("send you some cookies!");
//     });