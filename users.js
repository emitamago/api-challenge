// Endpoints for user 
const User = require('./user')
const getMetadata = require('./getMetaDataHelper')

const express = require("express");

const router = new express.Router();


// GET--- endpoint for getting all users
router.get('/', async function (req, res, next) {
    try {
        let results = await User.findAll();
        let metadata = getMetadata(req);
        let num_results = results.length;
        let finalResults = { metadata, num_results, results }
        return res.json( finalResults );
    } catch (err) {
        return next(err)
    }

});


module.exports = router;