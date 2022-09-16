const mongoose = require("mongoose");

const publicationStatsSchema = new mongoose.Schema({
  year: {
    journal: Number,
    conference: Number,
    book: Number,
  },
});

module.exports = mongoose.model("PublicationStats", publicationStatsSchema);
