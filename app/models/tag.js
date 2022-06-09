const mongoose = require("mongoose");


const tagSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("appTag", tagSchema);