const mongoose=require("mongoose");

const productSchema=mongoose.Schema({

    id:{
        type:Number,
        require:true
    },
    product_name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    }
    , category_id:{
        type:Number,
        require:true
    }
    ,
    Price:{
        type:Number,
        require:true
    },
    Size:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true
    },
    Color:{
        type:String,
        require:true
    },
    Brand:{
        type:String,
        require:true
    }
},{ collection: 'products' })
module.exports=mongoose.model("products",productSchema);