const ListingController = require("../controllers/ListingController");
const UserController = require("../controllers/UserController");
const path = require("path");

module.exports = app =>{
    // UserController
    app.post("/api/users/register",UserController.register);
	app.post("/api/users/login",UserController.login);
	app.get("/api/users/logout",UserController.logout);
	app.get("/api/users/:id",UserController.findById);
	app.get("/api/users/session",UserController.session);
	/*ListingController*/
	app.get("/api/listings",ListingController.all);
	app.post("/api/listings",ListingController.create);
	app.get("/api/listings/lotd",ListingController.lotd);
	app.get("/api/listings/:id",ListingController.findById);
	app.put("/api/listings/:id",ListingController.update);
	app.delete("/api/listings/:id",ListingController.destroy);

	app.all("*",(req,res,next)=>{
		res.sendFile(path.resolve("./client/public/dist/public/index.html"));
	});
}