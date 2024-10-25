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

const getListID = async (req, res) => {
      const { id } = req.params;
      try {
        const list = await ListServiceModel.findById(id);
        res.json(list);
      } catch (error) {
        res.status(404).json({ message: 'list not found' });
      }
    };

const updateList = async (req, res) => {
      const { id } = req.params; // ID الخاص بالمسؤول الذي نريد تحديثه
      const { serviceName, prix } = req.body; // البيانات المحدثة
    
      try {
          const list = await ListServiceModel.findById(id);
          if (!list) {
              return res.status(404).json({ message: "list not found!" });
          }
    
          // تحديث البيانات
          list.serviceName = serviceName || list.serviceName;
          list.prix = prix || list.prix;
          
    
          // حفظ التحديثات
          await list.save();
          return res.json({ message: "list updated successfully", list });
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Error updating list", error });
      }
    };

module.exports={
    register,
    getVservice,
    getListID,
    updateList
    
};