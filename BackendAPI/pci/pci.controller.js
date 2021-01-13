const express = require('express')
const router = express.Router();
const pciService= require('./pci.service');

//routes
router.get('/',getAll);
router.get('/q',getByYearID);

module.exports=router;
//api functions

function getAll(req,res, next){
    pciService.getAll()
    .then(data => res.type('json').send(data))
    .catch(err=> next(err))
}

function getByYearID(req, res, next){
    // const year =req.query.year;
    // const id = req.query.id;
    console.log(req.query.id,req.query.year);
    pciService.getByYearID(req.query.id, req.query.year)
    .then(data => res.type('json').send(data))
    .catch(err=> next(err));
}