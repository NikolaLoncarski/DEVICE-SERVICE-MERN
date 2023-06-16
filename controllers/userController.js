const User = require("../model/User");
const AppError = require("../utitls/appError");
const tryCatch = require("../utitls/tryCatch");

exports.createUser = tryCatch(async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "success",
    data: newUser,
  });
});
