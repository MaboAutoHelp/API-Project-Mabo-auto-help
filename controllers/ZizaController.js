const ZizaModel = require('../models/Ziza');
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken');


const register = async (req,res)=>{
    const {name ,pwd,role} = req.body

    const Ziza = await ZizaModel.findOne({name})
  
    if(Ziza){
      return res.json({message:"Ziza already exists!"})
  
    }
  
    const hashedPassword = bcrypt.hashSync(pwd,10)
    
    const newZiza =new ZizaModel({
        name :name,
        pwd:hashedPassword ,
        role:role
    });
  
    await newZiza.save();
  
    return res.json({message:"Ziza created successfully"})
}


const login = async (req, res) => {
    const {name ,pwd} = req.body
    const Ziza = await ZizaModel.findOne({name})
    if(!Ziza){
      return res.json({message:"Ziza doesn't exists!"})
  
    }
  
    const isPasswordValid = await bcrypt.compare(pwd,Ziza.pwd)
  
    if(!isPasswordValid){
      return res.json({message:"username or password is not correct"})
  
    }
  
    const token = jwt.sign({ id: Ziza._id, role: Ziza.role }, "Project Mabo auto help");

  
    return res.json({token , ZizaID:Ziza._id})
    

};
const getZiza = async (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      // التحقق من صحة التوكن
      const decoded = jwt.verify(token, "Project Mabo auto help");

  
      // العثور على المستخدم بناءً على الـ ID الموجود في التوكن
      const ziza = await ZizaModel.findById(decoded.id);
      if (!ziza) {
        return res.status(404).json({ message: 'Ziza not found' });
      }
  
      res.json(ziza);
    } catch (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  };
  /*const getZiza = async (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    const token = authHeader.split(" ")[1];
  
    try {
      // التحقق من صحة التوكن
      const decoded = jwt.verify(token, "Project Mabo auto help");
  
      // العثور على المستخدم بناءً على الـ ID الموجود في التوكن
      const ziza = await ZizaModel.findById(decoded.id);
      if (!ziza) {
        return res.status(404).json({ message: 'Ziza not found' });
      }
  
      res.json(ziza);
    } catch (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }
  };*/
  const getZizaRevenus = async (req, res) => {
    const { ID } = req.params;
    try {
      const Ziza = await ZizaModel.findById(ID);
      res.json(Ziza);
    } catch (error) {
      res.status(404).json({ message: 'Ziza not found' });
    }
  };
  


module.exports={
    login,
    register,
    getZiza,
    getZizaRevenus
};