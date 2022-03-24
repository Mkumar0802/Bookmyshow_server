const mongoose = require("mongoose");

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://muthu-admin:muthu@cluster0.qs7be.mongodb.net/moviedb?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
        console.log("MongoDB connected")
    }catch(err){
        console.log(err)
        process.exit()
    }
}