const ServiceModel =require('../models/Service')

//register
const registerService = async (req,res)=>{
    const { userID,name,teluser,serviceName,date,time,carType} = req.body

    
  
    const newService =new ServiceModel({
      userID:userID,
      name:name,
      teluser:teluser,
      serviceName:serviceName,
      date:date,
      time:time,
      carType:carType,
      ita:"attente"
      
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

 //getAllServices
 const getAllServices = async (req,res)=>{
    const AllServices = await ServiceModel.find()
    res.json(AllServices);
  }

  //updateService
 const updateService = async (req, res) => {
  const { ID } = req.params;
  const { ita  } = req.body;
  try {
    const updateservice = await ServiceModel.findByIdAndUpdate(
      ID,
      { ita },
      { new: true }
    );
    res.json(updateservice);
  } catch (error) {
    res.status(404).json({ message: 'ID not found' });
  }
};



module.exports={
    registerService,
    getAllService,
    getAllServices,
    updateService
    
}