const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    created: {
        type: Date,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    inoviceId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Customer', customerSchema);