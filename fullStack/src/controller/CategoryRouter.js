let express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
const categoryModel=require('../models/category_model');
exports.getCategoryRouter=async(req,res)=>{

    try{

        const category=await categoryModel.find();
        res.status(200).json(category);
    }catch(error){

        res.status(400).json({message:error.message});
        console.log("Controller create Owner error - "+error);
    }
}
exports.getCategoryWiseProduct=async(req,res)=>{
    try{

        const id=req.params.id;
        const numericId = Number(id);
        const category=await categoryModel.findOne({id:numericId});
        res.status(200).json(category);
    }catch(error){

        res.status(400).json({message:error.message});
        console.log("error in getCategoryWiseProduct - "+error);
    }
}



