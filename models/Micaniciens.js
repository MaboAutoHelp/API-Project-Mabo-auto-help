const mongoose = require("mongoose")

const MicaniciensSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
   
    tel:{
        type: String,
    },
    special:{
        type: String,
        
    },
    email:{
        type: String,
    },
    pwd:{
        type: String,
        required:true
    },
    Revenu:{
        type: Number,
        default:0
    },
    
})



const MicaniciensModel= mongoose.model("Micaniciens",MicaniciensSchema)
module.exports = MicaniciensModel