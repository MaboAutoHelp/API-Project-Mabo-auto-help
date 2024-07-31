const UsersModel =require('../models/Users')

//register
const register = async (req,res)=>{
    const { name,email,pwd} = req.body

    const user = await UsersModel.findOne({email})
  
    if(user){
      return res.json({message:"user already exists!"})
  
    }
  
   
    
    const newUser =new UsersModel({
      name :name,
      email:email,
      pwd:pwd ,
      
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
module.exports={
    register,
    login
}