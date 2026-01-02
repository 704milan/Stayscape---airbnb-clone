const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
  },
  price: Number,
  image: {
    url: String,
    filename: String,
  },
  description: String,
  location: String,
  country: String,
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "review",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const listing = mongoose.model("Listing", listingSchema);
module.exports = listing;
