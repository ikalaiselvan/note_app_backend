const mongoose = require("mongoose");

// import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    data: [
      {
        heading: {
          type: String,
          default: "heading",
          required: true,
        },
        body: {
          type: String,
        },
        background: {
          type: String,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
    forgetPassword: {
      time: {
        type: Date,
      },
      otp: {
        type: String,
      },
    },
    token: {
      type: String,
    },
  },
  {
    collection: "User",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// export default User;
