const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"]
    },
    age: {
        type: Number,
        default: null
    }
});

const User = mongoose.model("user", UserModel);
module.exports = User;