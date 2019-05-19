const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    name: String,
    gender:String,
    age:String
}, {
    timestamps: true
});

module.exports = mongoose.model('UserAPP', Schema);
