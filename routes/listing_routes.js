const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapAsync");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });
const {
  isLoggedIn,
  isOwner,
  joiValidateListing,
} = require("../utils/middleware");
const listingController = require("../controllers/listings");

//index
router.route("/").get(wrapasync(listingController.index));

//show listing
router.route("/listing/:id").get(wrapasync(listingController.showListing));

//add new listing
router
  .route("/newListing")
  .get(isLoggedIn, listingController.newListingForm)
  .post(
    isLoggedIn,
    upload.single("Listing[image]"),
    joiValidateListing,
    wrapasync(listingController.addNewListing)
  );

//edit listing
router
  .route("/edit/:id")
  .get(isLoggedIn, isOwner, wrapasync(listingController.editListingForm))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("Listing[image]"),
    joiValidateListing,
    wrapasync(listingController.editListing)
  );

//delete listing
router
  .route("/delete/:id")
  .delete(isLoggedIn, isOwner, wrapasync(listingController.deleteListing));

module.exports = router;
