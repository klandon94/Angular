const Note = require("../models/note");

class NoteController{
    findAll(req,res){
        Note.find({}).sort('-createdAt').exec((err,notes) =>{
            if (err) return res.json(err);
            else return res.json(notes);
        })
    }
    create(req,res){
        let note = new Note(req.body);
        note.save(err=>{
            if (err) return res.json(err);
            else return res.json(note);
        })
    }
}

module.exports = new NoteController();