const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    name: String,
    img: String,
    emailid: String,
    intro: String,
    title: String,
    position: String,
    linkedin: String,
    twitter: String,
    facebook: String,
    experience: Number,
    projects: Number,
    trainings: Number,
    papers: Number,
});

module.exports = mongoose.model("userProfile",  userProfileSchema);