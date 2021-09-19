const express = require("express");
const router = express.Router();
const { getFees } = require("../../controllers/fees/feesController");

router.get("/", getFees);

module.exports = router;
