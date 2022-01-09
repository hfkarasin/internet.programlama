const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name : {type: String, required: "Cannot be empty"},
    subtitle : {type: String, required: "Cannot be empty"},
    price : {type: String, required: "Cannot be empty"}


});