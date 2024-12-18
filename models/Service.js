const mongoose = require("mongoose")
const ServiceSchema = new mongoose.Schema({
    _id:{
        type: String,
    },
    userID:{
        type: String,
    },
    name:{
        type: String,
    },
    teluser:{
        type:String,
    },
    serviceName:{
        type: String,
    },
    
    date:{
        type: String,
    },
    time:{
        type: String,
    },
    carType:{
        type: String,
    },
    lieu:{
        type: String,
    },
    ita:{
        type: String,
    },
    prix:{
        type: String,
    },
    
    MicanicienID:{
        type :String,
    },
    itaprix:{
        type: String,
    },
    lieuMicanicien:{
        type: String,
    },
    lieuUser:{
        type: String,
    },
    tel:{
        type: String,
    },
})
const ServiceModel= mongoose.model("service",ServiceSchema)
module.exports = ServiceModel