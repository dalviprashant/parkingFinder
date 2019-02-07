const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({

    UserEmail: {
        type: String,
        required: true
    },

    VehicleNumber: {
        type:String,
        required:true
    },
    VehicleType: {
        type:String,
        required:true
    }

});

const Vehicle = module.exports = mongoose.model('vehicle' , VehicleSchema );
