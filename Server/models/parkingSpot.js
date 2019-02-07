const mongoose = require('mongoose');

const ParkingSchema = mongoose.Schema({
    ParkingName:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    ParkingAddress:{
        type:String,
        required:true
    },
    TotalParkingLot:{
        type:Number,
        required:true
    },
    AvailableParkingLot:{
        type:Number,
        required:true
    }

});

const parkingFinder = module.exports = mongoose.model('parkingspot' , ParkingSchema );
