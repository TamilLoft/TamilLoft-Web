const express = require('express');
const router = express();
const path = require('path');


router.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
     
});
router.get('/home/about(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','about.html'));
     
});
router.get('/legal/privacypolicy(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','legal','privacypolicy.html'));
     
});
router.get('/legal/termsofservice(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','legal','termsofservice.html'));
     
});
//default rout's
router.get('index^*$(.html)?', (req,res)=>{
    res.redirect(301,'index.html')
})


module.exports = router;
