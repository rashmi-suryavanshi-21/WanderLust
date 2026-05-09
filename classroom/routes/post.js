const express = require("express");
const router = express.Router();



    // for POST
// index route 
router.get("/",(req,res)=>{
    res.send("hi");
    });

// show route 
router.get("/:id",(req,res)=>{
    res.send("hi show");
    });

// post route 
router.post("/:id",(req,res)=>{
    res.send("hi post");
    });

// delete route 
router.delete("/:id",(req,res)=>{
    res.send("hi delete");
    });

 module.exports = router;