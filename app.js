const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(express.json());

const appError = require("./utils/appError");

const userRoutes = require("./routes/userRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const modelRoutes = require("./routes/deviceSubRoutes/modelRoutes");
const brandRoutes = require("./routes/deviceSubRoutes/brandRoutes");
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
app.use("/service", deviceRoutes, modelRoutes, brandRoutes);

app.use(morgan("dev"));

app.all("*", (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});
