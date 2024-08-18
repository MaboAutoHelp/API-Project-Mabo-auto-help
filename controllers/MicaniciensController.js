const MicaniciensModel =require('../models/Micaniciens')


//login
const login =async (req,res)=>{
  const {email ,pwd} = req.body
  const Micanicien = await MicaniciensModel.findOne({email})
  if(!Micanicien){
    return res.json({message:"Micanicien doesn't exists!"})

  }
  if(!pwd == Micanicien.pwd){
    return res.json({message:"email or password is not correct"})

  }
  return res.json({ MicanicienID:Micanicien._id})
}


//register
const register = async (req,res)=>{
    const {name,tel,special,email,pwd} = req.body

    const Micaniciens = await MicaniciensModel.findOne({name})
  
    if(Micaniciens){
      return res.json({message:"Micaniciens already exists!"})
  
    }
    const newMicaniciens =new MicaniciensModel ({
      name:name,
      tel:tel,
      special:special,
      email:email,
      pwd:pwd
    });
  
    await newMicaniciens.save();
  
    return res.json({message:"Micaniciens created successfully"})
}
 //getAllMicaniciens
 const getAllMicaniciens = async (req,res)=>{
  const AllMicaniciens = await MicaniciensModel.find()
  res.json(AllMicaniciens);
}

//getUser
const getMicaniciens = async (req, res) => {
  const { MicanicienID } = req.params;
  try {
    const Micanicien = await MicaniciensModel.findById(MicanicienID);
    res.json(Micanicien);
  } catch (error) {
    res.status(404).json({ message: 'Micanicien not found' });
  }
};

module.exports={
    login,
    register,
    getAllMicaniciens,
    getMicaniciens
    
   
    
};