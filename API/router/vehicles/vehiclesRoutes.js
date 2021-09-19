const express = require("express");
const router = express.Router();
const {
  getVehicleTypes
} = require("../../controllers/vehicles/vehiclesController");

router.use("/", getVehicleTypes);

module.exports = router;
