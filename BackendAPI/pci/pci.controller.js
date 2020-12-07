const express = require('express')
const router = express.Router();
const pciServices = require('./pci.services');

//routes
router.get('/',getAll)


//api functions

function getAll(req,res, next){
    pciServices.getAll()
    .then(data => res.json(data))
    .catch(err=> next(err))
}
