const mongoose = require("mongoose");
const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    email: String,
    createdAt: Date,
})

userSchema.methods.comparePass=function(pass){
    return bcrypt.compareSync(pass,this.password);
}

module.exports = mongoose.model('User', userSchema);