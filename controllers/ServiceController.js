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
//getAllService
const getAllService = async (req, res) => {
  const { id } = req.params;
  try {
      const Services = await ServiceModel.find({ userID: id });
      if (Services) {
          res.json(Services);
      } else {
          res.status(404).json({ message: 'Services not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};





module.exports={
    registerService,
    getAllService
    
}