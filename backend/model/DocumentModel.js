const mongoose = require("mongoose")

const DocumentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("document", DocumentSchema)