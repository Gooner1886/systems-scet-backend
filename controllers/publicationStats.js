const PublicationStats = require("../models/publicationStats");
const getAllCitations = async (req, res) => {
  try {
    const allCitationData = await PublicationStats.publicationData.find({});
    console.log(allCitationData);
    res.status(201).json(allCitationData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getAllCitations };
