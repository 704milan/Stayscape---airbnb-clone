const listing = require("../models/listing");
const Review = require("../models/review");

//add review
module.exports.addReview = async (req, res) => {
  const reviewedListing = await listing.findById(req.params.id);
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  reviewedListing.reviews.push(newReview);
  await newReview.save();
  await reviewedListing.save();
  req.flash("success", "Review Added!");
  res.redirect(`/listings/listing/${req.params.id}`);
};

//delete review
module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Review Deleted!");
  res.redirect(`/listings/listing/${id}`);
};
