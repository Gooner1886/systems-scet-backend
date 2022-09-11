const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    email: String,
    createdAt: Date,
})

module.exports = mongoose.model('User', userSchema);