const mongoose = require("mongoose");

const publicationDataSchema = new mongoose.Schema({
  year: Number,
  citationType: String,
  count: Number,
});

module.exports = mongoose.model("PublicationData", publicationDataSchema);
