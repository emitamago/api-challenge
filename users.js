// Endpoints for user 
const User = require('./user')

const express = require("express");
const router = new express.Router();

// GET--- endpoint for getting all users
router.get('/', async function (req, res, next) {
    try {
        let users = await User.findAll();
        return res.json({ users });
    } catch (err) {
        return next(err)
    }

});


module.exports = router;