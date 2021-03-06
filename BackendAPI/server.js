require('dotenv').config();
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const errorHandler = require('./_helpers/error_handler');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//api routes
app.use('/pci', require('./pci/pci.controller'));
//global error handler
app.use(errorHandler)

//start server 
const port = process.env.NODE_ENV=== 'prodction'? 80 : 4000;
const server = app.listen(port, function(){
    console.log('Server Listening on port ' +port);
    console.log(process.env.PGUSER);
});