const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, require: true, unique: true},
    email: { type: String, require: true},
    password: { type: String, require: true},
    address: { type: String, require: true},
    phone: { type: Number , require: true},
    contact: { type: String, require: true}

}, { timestamps: true});

module.exports = UserSchema.model('User', UserSchema);