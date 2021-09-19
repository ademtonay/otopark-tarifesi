"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: {
    URL: '"http://localhost:5000/api?key="',
    KEY: '"nothingelsemetterscanim"'
  }
});
