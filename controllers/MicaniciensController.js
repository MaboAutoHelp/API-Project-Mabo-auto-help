const MicaniciensModel =require('../models/Micaniciens')


//register
const register = async (req,res)=>{
    const {name,tel,special} = req.body

    const Micaniciens = await MicaniciensModel.findOne({name})
  
    if(Micaniciens){
      return res.json({message:"Micaniciens already exists!"})
  
    }
    const newMicaniciens =new MicaniciensModel ({
      name:name,
      tel:tel,
      special:special,
    });
  
    await newMicaniciens.save();
  
    return res.json({message:"Micaniciens created successfully"})
}
 //getAllMicaniciens
 const getAllMicaniciens = async (req,res)=>{
  const AllMicaniciens = await MicaniciensModel.find()
  res.json(AllMicaniciens);
}

module.exports={
    register,
    getAllMicaniciens
    
   
    
};