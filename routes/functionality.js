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
const User = require("../controllers/User");

// router.route("/getJournalCitations").get(getJournalCitations);
// router.route("/getConferenceCitations").get(getConferenceCitations);
// router.route("/getBookCitations").get(getBookCitations);
router
  .route("/getAllCitations")
  .get(getAllCitations)
  .post(postCitationStats)
  .delete(deletePublicationStats);

router.route("/signIn").post(User.sign_in);
router.route("/getUserDetails").post(User.details);

router.route("/verifyCaptcha").post(VerifyCaptcha);

module.exports = router;
