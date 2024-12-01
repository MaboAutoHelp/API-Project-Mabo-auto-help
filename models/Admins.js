const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    Revenu:{
        type: Number,
        default:0
    },
    Delete:{
        type: String
    },
    tel:{
        type: String
    },
    lieuMicanicien:{
        type: String
    },

   
    
})



const AdminModel= mongoose.model("Admins",AdminSchema)
module.exports = AdminModel