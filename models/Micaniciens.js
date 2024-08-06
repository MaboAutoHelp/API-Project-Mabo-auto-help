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
        
    }
})



const MicaniciensModel= mongoose.model("Micaniciens",MicaniciensSchema)
module.exports = MicaniciensModel