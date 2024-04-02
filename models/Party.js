const mongoose = require("mongoose")
const { Schema } = mongoose
const {serviceSchema} = require("./Service")

const partySchama = new Schema ({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    services: {
        type: [serviceSchema],
        required: true,
    },
},{timestamps: true})

const Party = mongoose.model("Party",partySchama)

module.exports = Party;