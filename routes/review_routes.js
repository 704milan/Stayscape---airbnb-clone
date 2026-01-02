const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapAsync");
const { joiValidateReview } = require("../utils/middleware");
const { isLoggedIn, isReviewAuthor } = require("../utils/middleware");
const reviewController = require("../controllers/reviews");

//add review
router
  .route("/")
  .post(
    isLoggedIn,
    joiValidateReview,
    wrapasync(reviewController.addReview)
  );

//delete review
router
  .route("/:reviewId")
  .delete(
    isLoggedIn,
    isReviewAuthor,
    wrapasync(reviewController.deleteReview)
  );

module.exports = router;
