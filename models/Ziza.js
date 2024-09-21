const mongoose = require("mongoose")

const ZizaSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    pwd:{
        type: String,
        required:true
    },
    role:{
        type: String,

    }
    
})



const ZizaModel= mongoose.model("ziza",ZizaSchema)
module.exports = ZizaModel