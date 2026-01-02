const Joi = require("joi");
let joiListingSchema = Joi.object({
Listing : Joi.object({
    title : Joi.string().required(),
    price :  Joi.number().required().min(0),
    image :  Joi.string().allow (""),
    description : Joi.string().required(),
    location :  Joi.string().required(),
    country :  Joi.string().required(),
}).required(),
});
let joiReviewSchema = Joi.object({
    review : Joi.object({
            comment : Joi.string().required(),
            rating : Joi.number().required().min(0).max(5),
    }).required(),
});
module.exports = {joiListingSchema,joiReviewSchema};