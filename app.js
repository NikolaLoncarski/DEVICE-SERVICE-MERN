const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log(`App running on port 3001`);
    });
  });

app.use("/user", userRoutes);

app.use(morgan("dev"));
