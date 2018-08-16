const mongoose = require('mongoose');

var Product = mongoose.model('Product', new mongoose.Schema({
    title: {type:String, required:[true, "Title is required"], minlength:[4, "Title must be at least 4 characters"]},
    price: {type:Number, required:[true, "Price is required"]},
    image: {type:String}
}, {timestamps:true}));

module.exports = Product;