const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
comment : String,
rating :{
type : Number,
min : 0,
max : 5,
},
createdAt :{
   type : Date,
   default : new Date(),
},
author : {
   type : mongoose.Types.ObjectId,
   ref : "User",
},
});
const Review = mongoose.model("review",reviewSchema);
module.exports = Review;