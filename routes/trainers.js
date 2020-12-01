const express = require('express');
const router = express.Router();
const trainersCtrl = require('../controllers/trainers');
const isAuthenticated = require('../utils/authorization');


router.get('/workouts/:id/trainer/new', isAuthenticated, trainerCtrl.new);
router.post('/workouts/:id/trainer', isAuthenticated, trainerCtrl.create);

module.exports = router;
