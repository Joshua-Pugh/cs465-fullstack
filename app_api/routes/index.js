const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// Define route for our trip endpoint
router.route('/trips')
.get(tripsController.tripsList) // Get
.post(tripsController.tripsAddTrip);  //Post

// GET Method routes tripsFindByCode - requires parameter
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET
    .put(tripsController.tripsUpdateTrip); // PUT

module.exports = router;

