const User = require("../model/userModel");
const AppError = require("../utils/appError");
const tryCatch = require("../utils/tryCatch");
const jwt = require("jsonwebtoken");

exports.signUp = tryCatch(async (req, res) => {
  const newUser = await User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  const jwToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    toke: jwToken,
    data: newUser,
  });
});
