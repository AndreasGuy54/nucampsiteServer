const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for partners
const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// create model using the campsite schema
const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;