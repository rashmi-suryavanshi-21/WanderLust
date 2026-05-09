
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js")
const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, validateReview } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single('listing[image][url]'),
        validateListing,
        wrapAsync(listingController.createListing)
    );


// New route 
router.get("/new",
    isLoggedIn,
    listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image][url]'),
        validateListing,
        listingController.updateListing)
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing));

// Edit route    
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));


module.exports = router;