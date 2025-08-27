const express =require('express');
const router = express.Router();


router.post('/',(req,res) =>  {
    const {name}=req.body;
    if (name){
    return  res.status(200).json({success:true,message:`Welcome ${name}`})
    }
    else{
    return res.status(400).json({success:false,message:'Please Provide Credentials'})
    }
})
module.exports=router