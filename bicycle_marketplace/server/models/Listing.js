let mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ListingSchema =  new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"]},
    description: { type: String, required: true, maxlength:200},
    price: { type: Number, required: [true, "Price is required"], min:[1, "Must be at least $1"]},
    img: { type: String },
    location: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true}) 

var Listing = mongoose.model("Listing", ListingSchema)
module.exports = Listing