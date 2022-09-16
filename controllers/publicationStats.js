const PublicationData = require("../models/publicationData");
const getAllCitations = async (req, res) => {
  try {
    const allCitationData = await PublicationData.find({});
    // console.log(allCitationData);
    res.status(201).json(allCitationData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getAllCitations };
