const mongoose = require("mongoose");
// const dateFormat = require("dateformat");

const NoteSchema = new mongoose.Schema({
    content: {type:String, required:[true, "Please enter content"], minlength:[3, "Must be at least 3 characters"]},
}, {timestamps:true})
// NoteSchema.pre("save", next=>{
//     let now = new Date();
//     now = dateFormat(now, "mmmm dS, yyyy, h:MM:ss TT");
//     this.createdAt = now;
//     this.updatedAt = now;
//     next();
// })
var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;