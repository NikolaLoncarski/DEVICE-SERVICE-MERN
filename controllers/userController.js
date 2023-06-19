const User = require("../model/userModel");
const AppError = require("../utils/appError");
const tryCatch = require("../utils/tryCatch");

exports.getAllUsers = tryCatch(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});
