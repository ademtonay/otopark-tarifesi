const express = require("express");
const dotenv = require("dotenv");
const routerMiddleware = require("./router");
const { accessController } = require("./controllers/accessController");

dotenv.config({
  path: "./config/dev.env"
});
const { NODE_ENV, PORT } = process.env;

const app = express();

// ROUTER MIDDLEWARE
app.use("/api", accessController, routerMiddleware);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} --mode: ${NODE_ENV}`);
});
