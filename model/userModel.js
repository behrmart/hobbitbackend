const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please type your name"],
    },
    email: {
      type: String,
      required: [true, "Please type your email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please type your password"],
    },
    esAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
