const express = require("express");
const router = express.Router();
const fees = require("./fees/feesRoutes");

router.use("/fees", fees);

module.exports = router;
