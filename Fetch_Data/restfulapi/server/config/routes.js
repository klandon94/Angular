const tasks = require("../controllers/tasks");
const path = require("path");

module.exports = function(app){
    app.get('/tasks', (req,res)=>{
        tasks.showAll(req,res);
    })
    app.get('/tasks/:id', (req,res)=>{
        tasks.find(req,res);
    })
    app.post('/tasks', (req,res)=>{
        tasks.create(req,res);
    })
    app.put('/tasks/:id', (req,res)=>{
        tasks.edit(req,res);
    })
    app.delete('/tasks/:id', (req,res)=>{
        tasks.delete(req,res);
    })
    app.all("*", (req,res,next)=>{
        res.sendFile(this.path.resolve("./client/public/dist/index.html"));
    })
}