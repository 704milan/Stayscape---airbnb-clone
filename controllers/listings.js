const listing = require("../models/listing");
const { getCoordinates } = require("../public/js/get_coordinate");

//all listings
module.exports.index = async (req, res) => {
  const allListings = await listing.find();
  res.render("listings/index.ejs", { allListings });
};

//show listing
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const card = await listing
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  let { location } = card;
  let response = await getCoordinates(location);
  let { lon, lat } = response;
  console.log("lon",lon,"lat",lat);
  if (!card) {
    req.flash("failure", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/card.ejs", { card,lon,lat,location });
};

//new listing form
module.exports.newListingForm = (req, res) => {
  res.render("listings/newListing.ejs");
};

//add new listing
module.exports.addNewListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const newListing = new listing(req.body.Listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "Your Listing Added!");
  res.redirect("/listings");
};

//edit listing form
module.exports.editListingForm = async (req, res) => {
  const { id } = req.params;
  const oldListing = await listing.findById(id);
  if (!oldListing) {
    req.flash("failure", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let originalImageUrl = oldListing.image.url;
  oldListing.image.url = originalImageUrl.replace(
    "upload",
    "upload/c_fit,h_250,w_250"
  );
  res.render("listings/editListing.ejs", { oldListing });
};

//edit listing
module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const updatedListing = await listing.findByIdAndUpdate(
    id,
    { ...req.body.Listing },
    { runValidators: true, new: true }
  );
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    updatedListing.image = { url, filename };
  }
  await updatedListing.save();
  req.flash("success", "Listing updated!");
  res.redirect(`/listings/listing/${id}`);
};

//delete listing
module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted!");
  res.redirect("/listings");
};
