const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: trips - lists all the trips
// Regardsless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({}) // Return all trip records
    .exec(); 


    if (!q) {
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else {
        // Return resulting trips list
        return res
                .status(200)
                .json(q);
    }
};

// GET: trips - lists all the trips
// Regardsless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode}) // Return single record
    .exec(); 


    if (!q) {
        // Database returned no data
        return res
                .status(404)
                .json(err);
    }
    else {
        // Return resulting trips list
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};