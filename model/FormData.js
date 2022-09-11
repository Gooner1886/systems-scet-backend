const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    facultyName: String,
    paperTitle: String,
    submissionType: String,
    journalName: String,
    conferenceName: String,
    bookName: String,
    publisherName: String,
    authorName: String,
    coauthorName: Array,
    affiliations: String,
    journalType: String,
    ISSN: Number,
    ISBN: Number,
    DOI: String,
    status: String,
    pages: Number,
    month: Number,
    year: Number,
    journalLoc: String,
    link: String,
    proofLink: String,
    citationFormat: String,
    domain: String
})

module.exports = mongoose.model('Form', formSchema);