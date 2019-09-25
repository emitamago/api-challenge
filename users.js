// Endpoints for user 
const csv = require('csv-parser');
const fs = require('fs');

const express = require("express");
const results = []
const router = new express.Router();

// GET--- endpoint for getting all appointment
router.get('/', async function (req, res, next) {
    try {
        fs.createReadStream('users.csv')
        .pipe(csv())
        .on('data', (data) => { console.log(data) })
        .on('end', () => {console.log('CSV file successfully processed');
        });
       
        return res.json({results});
    } catch (err) {
        return next(err)
    }

});

module.exports = router;