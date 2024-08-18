const ServiceModel =require('../models/Service')
const qrcode = require('qrcode');

//register
const registerService = async (req,res)=>{
    const { userID,name,teluser,serviceName,date,time,carType,prix} = req.body

    
  try{
    const newService =new ServiceModel({
      userID:userID,
      name:name,
      teluser:teluser,
      serviceName:serviceName,
      date:date,
      time:time,
      carType:carType,
      ita:"attente",
      prix:prix
      
    });
    // تحويل البيانات إلى نص JSON لتوليد الـ QR Code
    const serviceData = JSON.stringify({
      userID,
      name,
      teluser,
      serviceName,
      date,
      time,
      carType,
      prix
    });
    // إنشاء كود الـ QR
    const qrCodeDataURL = await qrcode.toDataURL(serviceData);

    // حفظ كود الـ QR في المستند الجديد
    newService.qrCode = qrCodeDataURL;

  
    await newService.save();
    res.status(200).json({ message: 'Service registered successfully', qrCode: qrCodeDataURL });
  } catch (error) {
    res.status(500).json({ message: 'Error registering service', error });
  }
    
  
    //return res.json({message:"Service created successfully"})
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

   //getAllServicesAccepted
 const getAllServicesAccepted = async (req,res)=>{
  const AllServicesAccepted = await ServiceModel.find({ita: "accepted"})
  res.json(AllServicesAccepted);
}
//getAllServicesRejected
const getAllServicesRejected= async (req,res)=>{
  const AllServicesRejected = await ServiceModel.find({ita: "rejected"})
  res.json(AllServicesRejected);
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
    updateService,
    getAllServicesAccepted,
    getAllServicesRejected

    
}