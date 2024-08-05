const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
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



const MicaniciensModel= mongoose.model("Micaniciens",UsersSchema)
module.exports = MicaniciensModel