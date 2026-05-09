const Listing = require("../models/listing.js");

// GPT module.exports.index = async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index", { allListings });
// };
// index route
module.exports.index = async (req, res) => {
  let { search } = req.query;

  let allListings;

  if (search && search.trim() !== "") {
    allListings = await Listing.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } }
      ]
    });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index", { allListings });
};

// new form
module.exports.renderNewForm=(req,res)=>{
    console.log(req.user);
    res.render("listings/new.ejs");
     };

// show listing
module.exports.showListing= async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate:{
         path: "author",},
  })
    .populate("owner");
    if (!listing) {
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing});
     };

// create listing
module.exports.createListing = async(req,res,next)=>{
   let url = req.file.path;
   let filename = req.file.filename;
    console.log(url ,"..",filename);

   const newListing = new Listing(req.body.listing);
//    console.log(req.user);
   newListing.owner= req.user._id;//using password req.user;
   newListing.image ={url , filename};
   await newListing.save();
   req.flash("success", "New Listing Created!");
   res.redirect("/listings");
   };

// edit listing
   module.exports.renderEditForm =async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error","Listing you requested for does not exist");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/h_300,w_250" );

    res.render("listings/edit.ejs",{listing,originalImageUrl});
     };

// update listing
   module.exports.updateListing = async(req,res) =>{
    let{id} = req.params;
    
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});//listing is object in edit.ejs
    if(typeof req.file != "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image ={url , filename};
    await listing.save();}
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`)};

// delete listing
    module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "A Listing is deleted!");
    res.redirect("/listings");
};