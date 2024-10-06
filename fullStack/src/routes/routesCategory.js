const express=require('express');
const router=express.Router();
const categoryRouter=require('../controller/CategoryRouter');

router.get('/category',categoryRouter.getCategoryRouter);

router.get('/category/:id',categoryRouter.getCategoryWiseProduct);
module.exports=router;