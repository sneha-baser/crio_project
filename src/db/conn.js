const mongoose =require("mongoose");
/*mongoose.connect("mongodb://localhost:27017/memesapi",{
    keepAlive : true,
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true ,
    useFindAndModify : false
}).then(()=>{
    console.log("connection is established");
}).catch((e)=>{
    console.log("no Connection");

});*/
mongoose.connect("mongodb+srv://Sneha:sneha1629@cluster0.t3pij.mongodb.net/memedatabase?retryWrites=true&w=majority",{
    keepAlive : true,
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true ,
    useFindAndModify : false
}).then(()=>{
    console.log("connection is established");
}).catch((e)=>{
    console.log("no Connection");

});