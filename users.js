// Endpoints for user 
const csv = require('csv-parser');
const fs = require('fs');

const express = require("express");
const router = new express.Router();

// GET--- endpoint for getting all users
router.get('/', async function (req, res, next) {
   
       
        return res.send( "hello" );
  

});

module.exports = router;