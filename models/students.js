const mongoose = require('mongoose')

const Schema = mongoose.Schema
const StudentsSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    
})