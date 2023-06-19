const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: "String",
      required: [true, "A User must have a name!"],
    },
    email: {
      type: "String",
      required: [true, "A User must have a email!"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    password: {
      type: "String",
      required: [true, "A User must have a password!"],
      minlength: 8,
      select: false,
    },
    confirmPassword: {
      type: "String",
      required: [true, "Please confirm password!"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not the same!",
      },
    },
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

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

UserSchema.methods.correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
