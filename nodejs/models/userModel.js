const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");
const userSchmea = new mongoose.Schema({
    username: String,
    password: String,



});

userSchmea.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchmea);

