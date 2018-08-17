let express    = require("express");
let session    = require("express-session");
let flash      = require("express-flash");
let bodyParser = require("body-parser");
let path       = require("path");
let port       = 1234;

let app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/public/dist/public')));
app.use(flash());

app.use(session({
	secret:"whoathatscool",
	resave:false,
	saveUnitialized:true
}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port,()=>{
	console.log("Live on:", port)
});