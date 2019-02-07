const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;

const Vehicle = require('../models/Vehicle');
const ParkingAreas = require('../models/parkingSpot');

router.get('/parkingspot/:ccity' , (req , res , next) => {
    ParkingAreas.find({City: req.params.ccity },(err , items) => {
        if (err) {
            
            res.json(err);
        }else{
          
            //console.log("Pune");
            console.log(req.params.ccity);
          // console.log(req.body.ccity);
         //   console.log(req.body.ParkingName);
      //   console.log(req.body.SearchCity);
         
            res.json(items);
        }
    });
});