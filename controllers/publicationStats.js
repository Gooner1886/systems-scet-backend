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
    "year": 2017,
    "citationType": "Journal",
    "count": 404
  },
  {
      "year": 2017,
      "citationType": "Conference",
      "count": 220
  },
  {
      "year": 2017,
      "citationType": "Book",
      "count": 8
  },
  {
      "year": 2018,
      "citationType": "Journal",
      "count": 387
  },
  {
      "year": 2018,
      "citationType": "Conference",
      "count": 343
  },
  {
      "year": 2018,
      "citationType": "Book",
      "count": 18
  },
  {
      "year": 2019,
      "citationType": "Journal",
      "count": 417
  },
  {
      "year": 2019,
      "citationType": "Conference",
      "count": 438
  },
  {
      "year": 2020,
      "citationType": "Journal",
      "count": 462
  },
  {
      "year": 2020,
      "citationType": "Conference",
      "count": 469
  },
  {
      "year": 2020,
      "citationType": "Book",
      "count": 51
  },
  {
      "year": 2021,
      "citationType": "Journal",
      "count": 605
  },
  {
      "year": 2021,
      "citationType": "Conference",
      "count": 542
  },
  {
      "year": 2021,
      "citationType": "Book",
      "count": 55
  }
]