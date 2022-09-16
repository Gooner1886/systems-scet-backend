const User=require("../models/User");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

exports.sign_in=function(req,res){

    //console.log(req.body);
    User.findOne({
        username:req.body.username
    },function(err,user){
        if(err)
            throw err;
        
        if(!user || !user.comparePass(req.body.pass)){
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        
        return res.json({ token: jwt.sign({ username: user.username,email:user.email,
        name:user.name, _id: user._id }, process.env.SECRET) });
    });
}


exports.details=function(req,res,next){
    if(req.user){
        res.send(req.user);
        next();
    }
    else{
        return res.status(401).json({message:"Invalid Token"});
    }
}