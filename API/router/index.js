const express = require("express");
const router = express.Router();
const fees = require("./fees/feesRoutes");
const vehicles = require("./vehicles/vehiclesRoutes");

router.use("/fees", fees);

router.use("/vehicles", vehicles);

module.exports = router;
