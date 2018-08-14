const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const port = 1234;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/client/public/dist/public' ));

app.listen(port, ()=>{
    console.log("Live on port " + port);
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"))
});