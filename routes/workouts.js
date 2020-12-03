const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const isAuthenticated = require ('../utils/authorization');

router.get('/', isAuthenticated, workoutsCtrl.index);
router.get('/new', isAuthenticated, workoutsCtrl.new);
router.post('/', isAuthenticated, workoutsCtrl.create);
router.get('/:id', isAuthenticated,workoutsCtrl.show);


module.exports = router;