const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('module');
const port = process.env.PORT ||5100;



   

//middel ware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(multer().none());
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/modules')));


//routers
app.use(require('./routes/root.js'));
app.use(require('./routes/login.js'));

//Api
app.use(require('./Api/infoApi.js'));


//default route
app.all('/*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
     res.sendFile(path.join(__dirname,'view','404.html'));
    }
    else if(req.accepts('json')){
     res.json({"error":"404 Not Found"});
    }
    else{
     res.type('txt').send("404 Not Found");
    }
    
 });

 
//server
app.listen(port,()=>{console.log(`Server runing on: http://localhost:${port}`)});

