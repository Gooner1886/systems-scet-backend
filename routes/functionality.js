const express = require("express");
const { VerifyCaptcha } = require("../captcha");
const router = express.Router();
const {
  //     getJournalCitations,
  //     getConferenceCitations,
  //     getBookCitations,
  getAllCitations,
  postCitationStats,
  deletePublicationStats,
} = require("../controllers/publicationStats");
// const User = require("../controllers/User");

const {
  getUserProfile,
  postUserProfile,
  checkUserByEmail
} = require("../controllers/userProfile");

// router.route("/getJournalCitations").get(getJournalCitations);
// router.route("/getConferenceCitations").get(getConferenceCitations);
// router.route("/getBookCitations").get(getBookCitations);
router
  .route("/getAllCitations")
  .get(getAllCitations)
  .post(postCitationStats)
  .delete(deletePublicationStats);

router.route("/getUserProfileData").get(getUserProfile).post(postUserProfile);

router.route("/checkUserByEmail").post(checkUserByEmail);

// router.route("/signIn").post(User.sign_in);
// router.route("/getUserDetails").post(User.details);

router.route("/verifyCaptcha").post(VerifyCaptcha);

module.exports = router;

// {
//   "name": "Kishor Kolhe",
//   "img" : "",
//   "emailid" : "kishor.kolhe@mitwpu.edu.in",
//   "intro": "Dr. Kishor R. Kolhe has spent more than 24 years in Engineering Academics and Industry. Out of 11 years of Industry Experience he worked as Deputy Manager and HOD, Prepress and Information Technology Division of The Times of India, Pune for 9.5 years. More than 13 years he worked in Engineering Academics in Computer Engineering and Information Technology Departments in Savitribai Phule Pune University and Bharati Vidyapeeth Deemed University, Pune. He also worked as HOD, Department of Information Technology, Trinity College of Engineering, Pune. He is working as CEO (Examination), SPPU at MAEER’s MIT College of Engineering, Pune as an additional administrative responsibility from last 6 years. Currently he is working as an Associate Professor, CSE in School of Computer Engineering and Technology, Dr. Vishwanath Karad MIT World Peace University, Pune.",
//   "title": "PHD",
//   "position": "Associate Professor of CSE",
//   "linkedin": "",
//   "twitter" : "",
//   "facebook" : "",
//   "experience" : 24,
//   "projects": 60,
//   "trainings" : 15,
//   "papers" : 25
// }