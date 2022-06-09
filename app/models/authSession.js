const mongoose = require("mongoose");

const field = {
    "token": {
        type: String,
    },
    "accountToken": {
        type: String,
    },
    "email": {
        type: String,
    },
    "deviceToken": {
        type: String,
    },
    "ipAddress": {
        type: String,
    },
    "status": {
        type: String,
    }
}

const authSessionSchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model("appAuthSession", authSessionSchema);