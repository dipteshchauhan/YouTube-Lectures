let express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
const productModel=require('../models/product_model')

exports.getProducts=async (req,res)=>{

    try{

        const products= await productModel.find();
        res.status(200).json(products);

    }catch(error){
        console.log("Get Products got error - "+error);
        res.status(400).json({message:error.message})
    }
}

exports.getProductsBasedOnCategory=async (req,res)=>{

    try{
        const id=req.params.id;

        console.log(id);
        const numericId=Number(id);
        const products= await productModel.find({category_id:numericId});
        res.status(200).json(products);

    }catch(error){
        console.log("Get Products got error - "+error);
        res.status(400).json({message:error.message})
    }
}


