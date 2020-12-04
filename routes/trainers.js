const express = require('express');
const router = express.Router();
const trainersCtrl = require('../controllers/trainers');
const isAuthenticated = require('../utils/authorization');

router.get('/trainers', isAuthenticated, trainersCtrl.index);
router.get('/workouts/:id/trainers/new', isAuthenticated, trainersCtrl.new);
router.post('/workouts/:id/trainers', isAuthenticated, trainersCtrl.create);
router.get('/:id', isAuthenticated,  trainersCtrl.show);

module.exports = router;
