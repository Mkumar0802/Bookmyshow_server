const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:50
    },
    image:{
        type:String,
        required:true
    },
    screen:{
        type:String,
        maxlength:40 
    },
    language:{
        type:String,
        maxlength:40            
    },
    certificate:{
        type:String,
        maxlength:5,
        required:true
    },
   
    rating:{
        type:String,
        maxlength:40
    }

})

const Movie = mongoose.model('movie',movieSchema,'movieCollection');
module.exports = Movie;