const mongoose = require("mongoose");

const field = {
    "token": {
        type: String,
    },
    "name": {
        type: String,
    },

    "email": {
        type: String,
    },
    "phone": {
        type: String,
    },
    "password": {
        type: String
    },
    "image": {
        type: String
    },
    "rule": { // 1. admin  2. editor
        type: String
    },

    "status": {  // 1.active  2. inActive
        type: String
    },
    "OTPExpireAt": {
        type: Date
    }
}

const accountSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model("appAccount", accountSchema);