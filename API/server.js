const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config/dev.env"
});
const { NODE_ENV, PORT } = process.env;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} --mode: ${NODE_ENV}`);
});
