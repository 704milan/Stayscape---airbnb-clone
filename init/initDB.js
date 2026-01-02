const mongoose = require("mongoose");
const testData = require("./data");
const listing = require("../models/listing");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Stayscape");
}
main().then(() =>{
    console.log("connection established");
}).catch((err) =>{
    console.log(err);
});
const callTestData = async ()=>{
    await listing.deleteMany({});
    await listing.insertMany(testData).catch((err) =>{
        console.log(err);
    });
}
callTestData();