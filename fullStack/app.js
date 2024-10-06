let express=require("express");
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
let app=express(); 
let dotenv=require("dotenv");
let morgan=require("morgan");
let fs=require("fs");
dotenv.config();
const serveStatic = require('serve-static');
const cors=require("cors");
const path = require('path');
const router=require('./src/routes/routesCategory')
const routers=require('./src/routes/productRoutes')
let port=process.env.PORT || 6700;
app.use(cors());
app.use(express.static(path.join(__dirname+'/public')));
//
app.use(bodyParser.json());
const connectDB=async()=>{
    try{

        await mongoose.connect('mongodb://localhost:27017/nodeclass', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected")
    }catch(error){

        console.log("MongoDB Error - "+error);
    }
}
connectDB(); 
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));
app.use('/api', router);
app.use('/api', routers);
app.listen(port,(err)=>{

    if(err)
        throw err;
    else {console.log(`server running on ${port} port`)};
})
