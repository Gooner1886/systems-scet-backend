const mongoose = require("mongoose");

const publicationStatsSchema = new mongoose.Schema({
  year: Number,
  citationType: String,
  count: Number,
});

module.exports = mongoose.model("PublicationStats", publicationStatsSchema);
