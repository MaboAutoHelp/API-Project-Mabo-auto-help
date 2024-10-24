const ListServiceModel= require('../models/ListService')

const register = async (req,res)=>{
    const {familyService ,serviceName,prix} = req.body
  

      const test = await ListServiceModel.findOne({serviceName})
      if(test){
      return res.json({message:"Service already exists!"})
      }
      const newService =new ListServiceModel({
        familyService :familyService,
        serviceName:serviceName,
        prix:prix
      }); 
      await newService.save();
      return res.json({message:"newService created successfully"})

    }

const  getVservice = async (req,res)=>{
  const { V } = req.params;
  try {
      const list = await ListServiceModel.find({familyService: V})
      res.json(list);
  } catch(error){
    res.status(404).json({ message: 'ListService not found' });
  }
    }

module.exports={
    register,
    getVservice
    
};