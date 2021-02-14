const express = require("express");
const app =  express();
const env = require('dotenv');
const cors = require('cors');
require("./db/conn");
app.use(express.json());
const Memetable = require("./models/meme");
env.config();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get("/",(req,res)=>{
    res.send("hello from the express side");
});
//POST REQUEST
app.post("/memes",async (req,res)=>{
    const meme = new Memetable({
        name : req.body.name,
        caption : req.body.caption,
        url : req.body.url,
    });
    const newmeme = await meme.save();
    if(newmeme){
        res.send({
            _id : newmeme.id,
        });
    }
    else{
        res.status(401).send({
            message : "Invalid data"
        });
    }
});
//GET REQUEST
app.get("/memes",async(req,res)=>{
    try{
        
        const memeData = await Memetable.find().sort([['_id',-1]]).limit(10);
        res.send(memeData);
    }catch(e){
        res.send(e);
    }
});
//GET REQUEST with specific id
app.get("/memes/:id",async(req,res)=>{
    try{
        const memeData = await Memetable.findById(req.params.id);
            console.log(memeData);
       if(!(memeData)){
           res.status(404).send();
       }
       else{
           res.send(memeData);
       }
        
    }catch(e){
        res.status(404).send({
            message : "Invalid id"
        });
    }
});
//PATCH REQUEST
app.patch("/memes/:id",async(req,res)=>{
    try{
        const id = req.params.id;

    
        const updatememe = await Memetable.findByIdAndUpdate(id,req.body,{
            new : true
        });
        res.send(updatememe); 
    }
    catch(e){
        res.status(400).send(e);
    }    
});

app.listen(port,()=>{
    console.log(`connection isset up at ${port}`);
});
