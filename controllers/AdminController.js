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
      password:password,
      Delete:"Yes"
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
    if(admin.Delete == "No"){
      return res.json({message:"ita no"})
  
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
const updateAdmin = async (req, res) => {
  const { id } = req.params; // ID الخاص بالمسؤول الذي نريد تحديثه
  const { username, password, Revenu } = req.body; // البيانات المحدثة

  try {
      const admin = await AdminModel.findById(id);
      if (!admin) {
          return res.status(404).json({ message: "Admin not found!" });
      }

      // تحديث البيانات
      admin.username = username || admin.username;
      admin.password = password || admin.password;
      admin.Revenu = Revenu || admin.Revenu;

      // حفظ التحديثات
      await admin.save();
      return res.json({ message: "Admin updated successfully", admin });
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error updating admin", error });
  }
};
const updateDeleteStatus = async (req, res) => {
  const { id } = req.params; 

  try {
    
    const updatedAdmin = await AdminModel.findByIdAndUpdate(
      id,
      { Delete: "No" }, 
      { new: true } 
    );

    

    return res.json({ message: 'Admin updated successfully', admin: updatedAdmin });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating admin', error });
  }
};



module.exports={
    register,
    login,
    getAdmin,
    getAllAdmin,
    updateAdmin,
    updateDeleteStatus
    
};