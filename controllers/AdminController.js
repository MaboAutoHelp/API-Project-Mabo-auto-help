const AdminModel =require('../models/Admins')


//register
const register = async (req,res)=>{
    const {username ,password} = req.body
    const admin = await AdminModel.findOne({username})
    if(admin){
      return res.json({message:"Admin already exists!"})
    }
    const newAdmin =new AdminModel({
      username :username,
      password:password
    });
    await newAdmin.save();
    return res.json({message:"Admin created successfully"})
}
//login
const login =async (req,res)=>{
    const {username ,password} = req.body
    const admin = await AdminModel.findOne({username})
    if(!admin){
      return res.json({message:"Admin doesn't exists!"})
    }
    if(!password == admin.password){
      return res.json({message:"username or password is not correct"})
    }
    return res.json({ adminID:admin._id})
  
  }
  //getUser
const getAdmin = async (req, res) => {
  const { adminID } = req.params;
  try {
    const admin = await AdminModel.findById(adminID);
    res.json(admin);
  } catch (error) {
    res.status(404).json({ message: 'admin not found' });
  }
};
const getAllAdmin = async (req,res)=>{
  const All = await AdminModel.find()
  res.json(All);
}

module.exports={
    register,
    login,
    getAdmin,
    getAllAdmin
   
    
};