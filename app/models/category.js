const mongoose = require("mongoose");

const field = {
    "token": {
        type: String,
    },
    "name": { // ==>cash out account 
        type: String
    },
    "description": { // ==> cash in account
        type: String
    }
}

const categorySchema = mongoose.Schema(field, { timestamps: true })

module.exports = mongoose.model("appCategory", categorySchema);