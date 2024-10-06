const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({

    id:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    thumb:{
        type:String,
        required:true
    }
},{ collection: 'catgeory' })
module.exports=mongoose.model("catgeory",categorySchema);