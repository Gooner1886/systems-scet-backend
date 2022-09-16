const express = require('express');
const router = express.Router();
// const {
//     getJournalCitations,
//     getConferenceCitations,
//     getBookCitations,
//     getAllCitations
// } = require("../controllers/functionality.js");
const User=require("../controllers/User")

// router.route("/getJournalCitations").get(getJournalCitations);
// router.route("/getConferenceCitations").get(getConferenceCitations);
// router.route("/getBookCitations").get(getBookCitations);
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
