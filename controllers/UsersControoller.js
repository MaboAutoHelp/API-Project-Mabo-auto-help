const UsersModel =require('../models/Users')

//register
const register = async (req,res)=>{
    const { name,email,pwd,tel} = req.body
    const user = await UsersModel.findOne({email})
    if(user){
      return res.json({message:"user already exists!"})
    }
    const newUser =new UsersModel({
      name :name,
      email:email,
      pwd:pwd ,
      tel:tel,
    });
    await newUser.save();
    return res.json({message:"user created successfully"})
}

//login
const login =async (req,res)=>{
  const {email ,pwd} = req.body
  const user = await UsersModel.findOne({email})
  if(!user){
    return res.json({message:"User doesn't exists!"})
  }
  if(!pwd == user.pwd){
    return res.json({message:"email or password is not correct"})
  }
  return res.json({ userID:user._id})
}

//updateUser
const updateUser = async (req, res) => {
  const { UserId } = req.params;
  const { name,email,pwd,tel } = req.body;
  try {
    const updateUser = await UsersModel.findByIdAndUpdate(
      UserId,
      { name,email,pwd,tel },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    res.status(404).json({ message: 'UserId not found' });
  }
};

//getUser
const getUser = async (req, res) => {
  const { UserId } = req.params;
  try {
    const user = await UsersModel.findById(UserId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: 'user not found' });
  }
};

 //getAllUser
 const getAllUser = async (req,res)=>{
  const AllUser = await UsersModel.find()
  res.json(AllUser);
}



module.exports={
    register,
    login,
    updateUser,
    getUser,
    getAllUser
}