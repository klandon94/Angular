const products = require("../controllers/products");
const path = require("path");

module.exports = app =>{
    app.get('/api/products', products.findAll)
    app.post('/api/products', products.create)
    app.get('/api/products/:id', products.findOne)
    app.patch('/api/products/:id', products.edit)
    app.delete('/api/products/:id', products.delete)
    app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/public/dist/public/index.html"))
	});
}