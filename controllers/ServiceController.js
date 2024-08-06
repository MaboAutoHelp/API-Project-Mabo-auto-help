const ServiceModel =require('../models/Service')

//register
const registerService = async (req,res)=>{
    const { userID,serviceName,date,time,carType} = req.body

    
  
    const newService =new ServiceModel({
      userID:userID,
      serviceName:serviceName,
      date:date,
      time:time,
      carType:carType
      
    });
  
    await newService.save();
  
    return res.json({message:"Service created successfully"})
}





module.exports={
    registerService,
    
}