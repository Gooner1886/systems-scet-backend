const express = require('express');
const router = express.Router();
<<<<<<< HEAD
// const {
//     getJournalCitations,
//     getConferenceCitations,
//     getBookCitations,
//     getAllCitations
// } = require("../controllers/functionality.js");
const User=require("../controllers/User")
=======
const {
    // getJournalCitations,
    // getConferenceCitations,
    // getBookCitations,
    getAllCitations
} = require("../controllers/publicationStats.js");
>>>>>>> 9aef8b4a7924dafa9f3f782dc18259160b2d20a8

// router.route("/getJournalCitations").get(getJournalCitations);
// router.route("/getConferenceCitations").get(getConferenceCitations);
// router.route("/getBookCitations").get(getBookCitations);
<<<<<<< HEAD
// router.route("/getAllCitations").get(getAllCitations);

router.route("/signIn").post(User.sign_in);
router.route("/getUserDetails").post(User.details);

//authorization using JWT
router.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
});

module.exports=router;
=======
router.route("/getAllCitations").get(getAllCitations);

module.exports = router;
>>>>>>> 9aef8b4a7924dafa9f3f782dc18259160b2d20a8
