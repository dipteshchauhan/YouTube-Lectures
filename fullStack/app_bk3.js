let express=require("express");
let app=express(); 
let dotenv=require("dotenv");
let morgan=require("morgan");
let fs=require("fs");
dotenv.config();
const serveStatic = require('serve-static');
const cors=require("cors");
const path = require('path');
let port=process.env.PORT || 6700;
app.use(cors());
//static file path
app.use(express.static(path.join(__dirname+'/public')));

//html file path

let categoryRouter=require('./src/controller/CategoryRouter');
let productRouter=require('./src/controller/ProductRouter');

//middleware    
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}));
app.use('/category',categoryRouter);
app.use('/product',productRouter);


// app.get('/',(req,res)=>{
//     res.render('index')
// })
app.listen(port,(err)=>{

    if(err)
        throw err;
    else {console.log(`server running on ${port} port`)};
})
