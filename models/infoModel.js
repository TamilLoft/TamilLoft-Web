const { type } = require("os");
const db = require("../database/db");
const mongoose = require("mongoose");

// Define schema and model
const Schema = mongoose.Schema;
const registrationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsappNumber: {
      type: String,
      required: true,
      length: 10,
    },
    InPutFiles: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = { Registration };
