const listing = require("../models/listing");
const Review = require("../models/review");
const { joiListingSchema, joiReviewSchema } = require("../joi_schema");
const expressError = require("../utils/expressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.originalUrl = req.originalUrl;
    req.flash("failure", "you must be logged in first");
    return res.redirect("/user/login");
  }
  next();
};
module.exports.saveOriginalUrl = (req, res, next) => {
  if (req.session.originalUrl) {
    res.locals.originalUrl = req.session.originalUrl;
    return next();
  }
  next();
};
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  let oldListing = await listing.findById(id);
  if (!oldListing.owner.equals(res.locals.currUser._id)) {
    req.flash("failure", "you are not the owner of this listing");
    return res.redirect(`/listings/listing/${id}`);
  }
  next();
};
module.exports.joiValidateListing = (req, res, next) => {
  const { error } = joiListingSchema.validate(req.body);
  if (error) {
    throw new expressError(400, error);
  } else {
    next();
  }
};
module.exports.joiValidateReview = (req, res, next) => {
  const { error } = joiReviewSchema.validate(req.body);
  if (error) {
    throw new expressError(400, error);
  } else {
    next();
  }
};
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("failure", "you are not the author of this review");
    return res.redirect(`/listings/listing/${id}`);
  }
  next();
};
