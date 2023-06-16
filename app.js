const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();

mongoose
  .connect(process.env.DATABSE, { useNewUrlParser: true })
  .then(() => console.log("DB connection successful!"));

app.listen(3001, () => {
  console.log(`App running on port 3001`);
});

app.use(morgan("dev"));
