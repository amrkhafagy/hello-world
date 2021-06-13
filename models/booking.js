const config = require('config');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');






const BookingSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        unique: true
     },
     user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
});








exports.Booking = booking; 