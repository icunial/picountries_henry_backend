const mongoose = require("mongoose");

// Activity schema
const activitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    countries: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Activity = (module.exports = mongoose.model("Activity", activitySchema));
