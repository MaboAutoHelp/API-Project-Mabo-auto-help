const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
    },
    tel:{
        type: String,
    },
    pwd:{
        type: String,
        required:true
    }
})



const UsersModel= mongoose.model("users",UsersSchema)
module.exports = UsersModel