const mongoose = require("mongoose")

const RevenusSchema = new mongoose.Schema({
    username:{
        type: String,
        
    },
   
    Revenu:{
        type: Number,
        
    },
    date:{
        type: Date,
        default: Date.now
    },
    IDadmin:{
        type: String,
    }
    
    
})



const RevenusModel= mongoose.model("Revenus",RevenusSchema)
module.exports = RevenusModel