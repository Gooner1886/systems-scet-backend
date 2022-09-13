const express = require('express');
const router = express.Router();
const {
    getJournalCitations,
    getConferenceCitations,
    getBookCitations,
    getAllCitations
} = require("../controllers/functionality.js");

router.route("/getJournalCitations").get(getJournalCitations);
router.route("/getConferenceCitations").get(getConferenceCitations);
router.route("/getBookCitations").get(getBookCitations);
router.route("/getAllCitations").get(getAllCitations);