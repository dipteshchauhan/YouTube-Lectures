const express=require('express');
const routerProduct=express.Router();
const productController=require('../controller/ProductRouter')
routerProduct.get('/products',productController.getProducts);
routerProduct.get('/products/categorywise/:id',productController.getProductsBasedOnCategory)
module.exports= routerProduct;