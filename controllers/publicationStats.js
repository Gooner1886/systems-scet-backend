const PublicationStats = require("../models/publicationStats");
const getAllCitations = async (req, res) => {
  try {
    const allCitationData = await PublicationStats.find({});
    console.log(allCitationData);
    res.status(201).json(allCitationData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
//pushing code
const postCitationStats = (req, res) => {
  try {
    let newData = new PublicationStats(req.body);
    newData.save((err, user) => {
      console.log(user);
      return res.json(user);
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePublicationStats = async (req, res) => {
  try {
    await PublicationStats.remove({});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllCitations, postCitationStats, deletePublicationStats };

[
  {
    year: 2017,
    citationType: "Journal",
    count: 418,
  },
  {
    year: 2017,
    citationType: "Conference",
    count: 311,
  },
  {
    year: 2017,
    citationType: "Book",
    count: 10,
  },
  {
    year: 2018,
    citationType: "Journal",
    count: 565,
  },
  {
    year: 2018,
    citationType: "Conference",
    count: 449,
  },
  {
    year: 2018,
    citationType: "Book",
    count: 23,
  },
  {
    year: 2019,
    citationType: "Journal",
    count: 636,
  },
  {
    year: 2019,
    citationType: "Conference",
    count: 555,
  },
  { year: 2019, citationType: "Book", count: 32 },
  {
    year: 2020,
    citationType: "Journal",
    count: 700,
  },
  {
    year: 2020,
    citationType: "Conference",
    count: 633,
  },
  {
    year: 2020,
    citationType: "Book",
    count: 58,
  },
  {
    year: 2021,
    citationType: "Journal",
    count: 835,
  },
  {
    year: 2021,
    citationType: "Conference",
    count: 681,
  },
  {
    year: 2021,
    citationType: "Book",
    count: 79,
  },
];
