// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const errorController = require("../controllers/errorController")
const utilities = require("../utilities")

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
// Route for Vehicle Detail
router.get("/detail/:id",utilities.handleErrors(invController.buildDetail));
// Intentional error route for testing
router.get("/trigger-error", utilities.handleErrors(errorController.triggerError))

module.exports = router