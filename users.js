// Endpoints for user 

const express = require("express");
const router = new express.Router();

// GET--- endpoint for getting all appointment
router.get('/', async function (req, res, next) {
    try {
       
        return res.send("hello");
    } catch (err) {
        return next(err)
    }

});

module.exports = router;