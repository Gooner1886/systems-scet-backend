const Users = require("../models/userProfile");
const getUserProfile = async (req, res) => {
  try {
    const userProfileData = await Users.find({});
    console.log(userProfileData);
    res.status(201).json(userProfileData);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const postUserProfile = (req, res) => {
  try {
    let newUserData = new Users(req.body);
    newUserData.save((err, user) => {
      console.log(user);
      return res.json(user);
    });
  } catch (error) {
    console.log(error);
  }
};

const checkUserByEmail = async(req, res) => {
  
    const email = req.body.email;
    await Users.findOne({ emailid: email }, (err, docs) => {
        if(err) {
            return res.status(401).json({error: err});
        } else {
            console.log(docs);
            return res.status(201).json({user: docs});
        }
    });
    // console.log("this is objecttobereturned", currentUser);
    // return res.json(currentUser);
    // if (!currentUser) {

    // } else {
    //   console.log(currentUser);
    //   return res.json({"email" : );
    // }
};

module.exports = { getUserProfile, postUserProfile, checkUserByEmail };
