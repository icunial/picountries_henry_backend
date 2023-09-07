const mongoose = require("mongoose");

// Activity schema
const activitySchema = mongoose.Schema({
  _id: {
    type: Number,
  },
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
});

const Activity = (module.exports = mongoose.model("Activity", activitySchema));
