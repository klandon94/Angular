const notes = require("../controllers/notes");
const path = require("path");

module.exports = app =>{
    app.get("/api/notes", notes.findAll)
    app.post("/api/notes", notes.create)
    app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/public/dist/public/index.html"))
	});
}