const mongoose = require("mongoose");

const publicationStatsSchema = new mongoose.Schema({
  year: {
    type: String,
    required: [true, "Must provide year"],
    trim: true,
    maxlength: [4, "Year should not exceed 4 digits"],
  },
  citationType: {
    type: String,
    required: [true, "Must provide Citation Type"],
    trim: true,
  },
  count: {
    type: Number,
    required: [true, "Must provide count"],
    trim: true,
  },
});


module.exports = mongoose.model("PublicationStats", publicationStatsSchema);