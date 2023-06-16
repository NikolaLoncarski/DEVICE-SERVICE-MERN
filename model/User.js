const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: "String",
      required: [true, "A User must have a name!"],
    },
    password: {
      type: "String",
      required: [true, "A User must have a password!"],
      minlength: 8,
    },
    email: { type: "String", required: [true, "A User must have a email!"] },
    typeOfUser: {
      type: "String",
      enum: ["user", "employee", "admin"],
      default: "user",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
