const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router
.route("/signup")
.get(userController.rendersignUpForm)
.post(wrapAsync(userController.singUp));

router
.route("/login")
.get(userController.renderloginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",
    {failureRedirect:'/login',
        failureFlash:true,
    }),
    userController.login
    )

router.get("/logout",userController.logOut);

function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in!");
    return res.redirect("/login");
  }
  next();
}

router.post("/listings/:id/wishlist", isLoggedIn, async (req, res) => {
  let { id } = req.params;

  await User.findByIdAndUpdate(req.user._id, {
    $addToSet: { wishlist: id }
  });

  res.redirect("back");
});


router.post("/listings/:id/unwishlist", isLoggedIn, async (req, res) => {
  let { id } = req.params;

  await User.findByIdAndUpdate(req.user._id, {
    $pull: { wishlist: id }
  });

  res.redirect("back");
});

router.get("/wishlist", async (req, res) => {
  if (!req.user) {
    req.flash("error", "You must be logged in");
    return res.redirect("/login");
  }

  const user = await User.findById(req.user._id).populate("wishlist");
  res.render("users/wishlist.ejs", { listings: user.wishlist });
});
module.exports = router;