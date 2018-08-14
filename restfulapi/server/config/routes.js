const tasks = require("../controllers/tasks");
const path = require("path");

module.exports = function(app){
    app.get('/api/tasks', (req,res)=>{
        tasks.showAll(req,res);
    })
    app.get('/api/tasks/:id', (req,res)=>{
        tasks.find(req,res);
    })
    app.post('/api/tasks', (req,res)=>{
        tasks.create(req,res);
    })
    app.put('/api/tasks/:id', (req,res)=>{
        tasks.edit(req,res);
    })
    app.delete('/api/tasks/:id', (req,res)=>{
        tasks.delete(req,res);
    })
    app.all("*", (req,res,next)=>{
        res.sendFile(this.path.resolve("./client/public/dist/index.html"));
    })
}