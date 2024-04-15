const mongoose = require('mongoose');
const { Schema } = mongoose;


const FormSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
});
const form1 = mongoose.model('Form', FormSchema);
module.exports = form1