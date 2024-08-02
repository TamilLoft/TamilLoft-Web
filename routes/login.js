const express = require('express');
const router = express();
const path = require('path');



router.get('/home/register/info/success(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','login','success.html'));
     
});
router.get('/home/register(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','login','register.html'));
     
});

router.get('/home/register/info(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','login', 'login.html'));
     
});

//default rout's
router.get('index^*$(.html)?', (req,res)=>{
    res.redirect(301,'index.html')
})


module.exports = router;
