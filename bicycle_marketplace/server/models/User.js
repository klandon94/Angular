let mongoose = require('mongoose')
let Schema = mongoose.Schema;

var UserSchema =  new mongoose.Schema({
    first: { 
        type: String, 
        required: [true, "First name is required"], 
        minlength: [2, "First name must be 2 characters"] },
    last: { 
        type: String, 
        required: [true, "Last name is required"], 
        minlength: [2,"Last name must be 2 characters"] },
    email: { 
        type: String, 
        required: [true, "Email is required"],
        validate: {
            validator:function(value){
                return /^[a-zA-Z0-9.+_-]+@[a-zA-z0-9._-]+\.[a-zA-z]+$/.test(value);
            },
            message: "Must be a valid email."
        }
    },
    password: { 
        type: String, 
        required: [true, "Password is required"], 
        minlength: [8, "Password must be 8 characters"] 
    },
    confirm: {type:String},
    listings: [{type: Schema.Types.ObjectId, ref: 'Listing'}]
}, {timestamps: true})

var User = mongoose.model("User", UserSchema)
module.exports = User;