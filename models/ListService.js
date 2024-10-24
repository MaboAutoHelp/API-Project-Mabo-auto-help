const mongoose = require("mongoose")
const ListServiceSchema = new mongoose.Schema({
    
    familyService:{
        type: String,
    },
    serviceName:{
        type: String,
    },
    prix:{
        type: String,
    },
    
})
const ListServiceModel= mongoose.model("listservice",ListServiceSchema)
module.exports = ListServiceModel