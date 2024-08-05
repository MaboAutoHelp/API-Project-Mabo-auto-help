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


module.exports={
    register,
    
   
    
};