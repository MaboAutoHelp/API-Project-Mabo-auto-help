const ServiceModel =require('../models/Service');
const AdminModel =require('../models/Admins')


const qrcode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
//register
const registerService = async (req,res)=>{
    const { userID,name,teluser,serviceName,date,time,carType,lieu ,prix,lieuUser} = req.body

    
  try{


    const serviceID = uuidv4();
    const newService =new ServiceModel({
      _id: serviceID,
      userID:userID,
      name:name,
      teluser:teluser,
      serviceName:serviceName,
      date:date,
      time:time,
      carType:carType,
      lieu:lieu,
      ita:"attente",
      prix:prix,
      itaprix:"No",
      lieuUser:lieuUser
      
    });
    
    await newService.save();
    res.status(200).json({ message: 'Service registered successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Error registering service', error });
  }
    
    //return res.json({message:"Service created successfully"})
}
//getAllService
/*const getAllService = async (req, res) => {
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
};*/
const getAllService = async (req, res) => {
  const { id } = req.params;
  try {
      const Services = await ServiceModel.find({ userID: id }).sort({ date: -1 });
      if (Services && Services.length > 0) {
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
const getAllServicesAttente = async (req,res)=>{
  const AllServicesAccepted = await ServiceModel.find({ita: "attente"})
  res.json(AllServicesAccepted);
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
//getAllServicesYes
const getAllServicesYes= async (req,res)=>{
  const AllServicesRejected = await ServiceModel.find({ita: "yes"})
  res.json(AllServicesRejected);
}

//getAllServicesReparation
const getAllServicesReparation= async (req,res)=>{
  const { id } = req.params;
  const AllServicesRejected = await ServiceModel.find({userID: id ,ita: "La réparation est terminée"})
  res.json(AllServicesRejected);
}

  //updateService
const updateService = async (req, res) => {
  const { ID } = req.params;
  const { ita,MicanicienID ,tel,lieuMicanicien } = req.body;
  try {
    
    const updateservice = await ServiceModel.findByIdAndUpdate(
      ID,
      { ita,MicanicienID,tel,lieuMicanicien },
      { new: true }
    );
    res.json(updateservice);
  } catch (error) {
    res.status(404).json({ message: 'ID not found' });
  }
};
/*const updateServiceTelLieuMicanicien = async (req, res) => {
  const { ID } = req.params;
  const { MicanicienID } = req.body;
  
  try {
    // البحث عن الميكانيكي في مجموعة Admin
    const micanicien = await AdminModel.findById(MicanicienID);

    // التحقق إذا كان الميكانيكي موجودًا
    if (!micanicien) {
      return res.status(404).json({ message: 'Micanicien not found' });
    }

    const { tel, lieuMicanicien } = micanicien;

    // تحديث بيانات الخدمة
    const updateservice = await ServiceModel.findByIdAndUpdate(
      ID,
      { tel, lieuMicanicien },
      { new: true }
    );

    // تحقق إذا كانت الخدمة موجودة وتم تحديثها
    if (!updateservice) {
      return res.status(404).json({ message: 'Service ID not found' });
    }

    res.json(updateservice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};*/
/*
//test1
const git = async (id) => {
  
  try {
    const s = await ServiceModel.findById(id);
    res.json(s);
  } catch (error) {
    res.status(404).json({ message: 's not found' });
  }
    
}
const updateServiceTelLieuMicanicien = async (req, res) => {
  const { ID, MicanicienID } = req.params;
  console.log('Received Service ID:', ID);
  console.log('Received Micanicien ID:', MicanicienID);

  try {
    // البحث عن الميكانيكي
    const micanicien = await AdminModel.findById( MicanicienID );
    if (!micanicien) {
      console.log('Micanicien not found');
      return res.status(404).json({ message: 'Micanicien not found' });
    }
    console.log('Found Micanicien:', micanicien);

    // البحث عن الخدمة
    
    const s = await git(ID);
    if (!s) {
      console.log('Service not found');
      return res.status(404).json({ message: 'Service not found' });
    }
    console.log('Found Service:', s);

    // تحديث الخدمة
    const { tel, lieuMicanicien } = micanicien;
    const updateservice = await ServiceModel.findByIdAndUpdate(
      ID,
      { tel, lieuMicanicien },
      { new: true }
    );

    if (!updateservice) {
      return res.status(404).json({ message: 'Service update failed' });
    }

    console.log('Service updated successfully:', updateservice);
    res.json(updateservice);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};*/




const git = async (id) => {
  try {
    console.log('Searching for Service with ID:', id);

    // البحث باستخدام الـ String مباشرةً
    const service = await ServiceModel.findOne({ _id: id });

    console.log("Montage terminé avec succès:", service);
    return service;
    
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};


const updateServiceTelLieuMicanicien = async (req, res) => {
  const { ID, MicanicienID } = req.params;
  console.log('Received Service ID:', ID);
  console.log('Received Micanicien ID:', MicanicienID);

  try {
    // البحث عن الميكانيكي
    const micanicien = await AdminModel.findById(MicanicienID);
    if (!micanicien) {
      console.log('Micanicien not found');
      return res.status(404).json({ message: 'Micanicien not found' });
    }
    console.log('Found Micanicien:', micanicien);

    // البحث عن الخدمة باستعمال الدالة المعدلة
    const s = await git(ID);
    if (!s) {
      console.log('Service not found');
      return res.status(404).json({ message: 'Service not found' });
    }
    console.log('Found Service:', s);

    // تحديث الخدمة
    const { tel, lieuMicanicien } = micanicien;
    const updateservice = await ServiceModel.findByIdAndUpdate(
      ID,
      { tel, lieuMicanicien },
      { new: true }
    );

    if (!updateservice) {
      return res.status(404).json({ message: 'Service update failed' });
    }

    console.log('Service updated successfully:', updateservice);
    res.json(updateservice);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};









/*const updateService = async (req, res) => {
  const { ID } = req.params;
  const { ita, MicanicienID } = req.body;

  try {
    
    const micanicien = await AdminModel.findById(MicanicienID);

  
    if (!micanicien) {
      return res.status(404).json({ message: 'Micanicien not found' });
    }

    const tel = micanicien.tel;
    const lieuMicanicien = micanicien.lieuMicanicien;

    const updatedService = await ServiceModel.findByIdAndUpdate(
      ID,
      { ita, MicanicienID, tel,lieuMicanicien },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: 'Service ID not found' });
    }

    res.json(updatedService);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};*/

//getServiceID
/*const getServiceID = async (req, res) => {
  const { id } = req.params;
  try {
      const Services = await ServiceModel.findById(id);
      if (Services) {
          res.json(Services);
      } else {
          res.status(404).json({ message: 'Services not found' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};*/
// getServiceID
const getServiceID = async (req, res) => {
  const { id } = req.params;
  try {
    // جلب بيانات الخدمة باستخدام المعرف
    const service = await ServiceModel.findById(id);

    if (service) {
      const { MicanicienID, prix } = service;

      // التحقق من أن MicanicienID و prix موجودان
      if (MicanicienID && prix) {
        // تحويل prix إلى رقم
        const servicePrice = parseFloat(prix);

        // تحديث Revenu للفني
        const updatedMechanic = await AdminModel.findByIdAndUpdate(
          MicanicienID,
          { $inc: { Revenu: servicePrice } }, // إضافة السعر إلى Revenu
          { new: true }
        );

        if (!updatedMechanic) {
          return res.status(404).json({ message: 'Mechanic not found' });
        }

        // إعادة بيانات الخدمة مع الفني المحدث
        res.json({ service, updatedMechanic });
      } else {
        res.status(400).json({ message: 'Missing MicanicienID or prix' });
      }
    } else {
      res.status(404).json({ message: 'Service not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deletedService = async (req, res) => {
  try {
    const deletedService = await ServiceModel.deleteMany({}); // حذف جميع الكتب
    res.json({ message: 'All books have been deleted successfully', deletedService });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the books' });
  }
};
 //updateServiceIta
 const updateServiceIta = async (req, res) => {
  const { ID } = req.params;
  const { ita } = req.body;
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
//getServiceMicanicien
const getServiceMicaniciens = async (req, res) => {
  const { id } = req.params;
  try {
      const Services = await ServiceModel.find({MicanicienID :id});
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
//livraison

const  livraison = async (req,res)=>{
  const AllServicesAccepted = await ServiceModel.find({lieu: "livraison"}).sort({ date: -1 });
  res.json(AllServicesAccepted);
}
//Sans livraison
const  SansLivraison = async (req,res)=>{
  const AllServicesAccepted = await ServiceModel.find({lieu: "Sans livraison"}).sort({ date: -1 });
  res.json(AllServicesAccepted);
}

const getServiceIDFactures = async (req, res) => {
  const { id } = req.params;
  try {
    const Factures = await ServiceModel.findById(id);
    res.json(Factures);
  } catch (error) {
    res.status(404).json({ message: 'Factures not found' });
  }
};
// new 
/*const newService = async (req,res) =>{
  const {serviceName,prix,v} = req.body
  try{
    const serviceID = uuidv4();
    const newService =new ServiceModel({
      _id: serviceID,
      serviceName:serviceName,
      prix:prix,
      v:v
      
    });
    await newService.save();
    res.status(200).json({ message: 'Service registered successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Error registering service', error });
  }
}*/






module.exports={
    registerService,
    getAllService,
    getAllServices,
    updateService,
    getAllServicesAccepted,
    getAllServicesRejected,
    getServiceID,
    deletedService,
    getAllServicesAttente,
    updateServiceIta,
    getServiceMicaniciens,
    getAllServicesReparation,
    livraison,
    SansLivraison,
    getAllServicesYes,
    getServiceIDFactures,
    updateServiceTelLieuMicanicien,
    git

    
}