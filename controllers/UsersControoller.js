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
/*const login =async (req,res)=>{
  const {email ,pwd} = req.body
  const user = await UsersModel.findOne({email})
  if(!user){
    return res.json({message:"User doesn't exists!"})
  }
  if(!pwd == user.pwd){
    return res.json({message:"email or password is not correct"})
  }
  return res.json({ userID:user._id})
}*/
const login = async (req, res) => {
  try {
    const { email, pwd } = req.body;

    // التحقق من صحة المدخلات
    if (!email || !pwd) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // البحث عن المستخدم
    const user = await UsersModel.findOne({ email });

    // التحقق من وجود المستخدم
    if (!user) {
      return res.status(404).json({ message: "User doesn't exist!" });
    }

    // مقارنة كلمة المرور
    if (pwd !== user.pwd) {
      return res.status(401).json({ message: "Email or password is not correct" });
    }

    // استجابة النجاح
    return res.status(200).json({ userID: user._id });
  } catch (error) {
    // معالجة الأخطاء العامة
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


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