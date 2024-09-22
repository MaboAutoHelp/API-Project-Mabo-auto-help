const RevenusModel =require('../models/Revenus')
const AdminModel =require('../models/Admins')


//register
/*const Revenus = async (req,res)=>{
    try{
    const {id,id1} = req.body
    const admin = await AdminModel.findById(id);
    const newRevenus = new RevenusModel({
        username:admin.username,
        Revenu:admin.Revenu,
        date:"",
        IDadmin:id1
    
    });
    await newRevenus.save();
    const updatedAdmin = await AdminModel.findByIdAndUpdate(
        id,
        { Revenu:0 }, // إضافة السعر إلى Revenu
        { new: true }
      );
    res.status(200).json({ message: 'Service registered successfully',updatedAdmin});
  } catch (error) {
    res.status(500).json({ message: 'Error registering service', error });
  }

}*/
const Revenus = async (req, res) => {
    try {
      const { id, id1 } = req.body;
      const admin = await AdminModel.findById(id);
  
      // الحصول على التاريخ الحالي
      const currentDate = new Date().toISOString(); // سيضيف التاريخ والوقت الحالي بتنسيق ISO
  
      const newRevenus = new RevenusModel({
        username: admin.username,
        Revenu: admin.Revenu,
        date: currentDate, // إضافة التاريخ الحالي
        IDadmin: id1
      });
  
      await newRevenus.save();
      
      const updatedAdmin = await AdminModel.findByIdAndUpdate(
        id,
        { Revenu: 0 }, // إعادة تعيين Revenu إلى 0
        { new: true }
      );
  
      res.status(200).json({ message: 'Service registered successfully', updatedAdmin });
    } catch (error) {
      res.status(500).json({ message: 'Error registering service', error });
    }
  }
  
const getAllRevenus = async (req,res)=>{
    const getAllRevenus = await RevenusModel.find()
    res.json(getAllRevenus);
  }



module.exports={
    Revenus,
    getAllRevenus
   
    
};