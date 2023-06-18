const User = require("../model/userModel");
const AppError = require("../utils/appError");
const tryCatch = require("../utils/tryCatch");

// exports.createUser = tryCatch(async (req, res) => {
//   const newUser = await User.create({
//     userName: req.body.userName,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   res.status(201).json({
//     status: "success",
//     data: newUser,
//   });
// });
