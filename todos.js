const express =require('express');

const router = express.Router();

router.get('/',function(req,res){
    res.render('index');
});

router.get('/a-coach',function(req,res){
    res.render('nueva_leccion');
});

router.get('/g-coach',function(req,res){
    res.render('nueva_leccion');
});

module.exports = router;