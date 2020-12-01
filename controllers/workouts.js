const Workout= require('../models/workout');
const Trainer = require('../models/trainer');

module.exports = {
  index,
  new: newWorkout,
  create, 
  show,
};

function index(req, res) {
    res.render('workouts/index', { title:  workouts });
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'Add Workout' });
}

function create(req, res) {
   req.body.createdBy = req.user._id;
   Workout.create(req.body, function(err, workout) {
        res.redirect('/workouts');
    });
}

function show(req, res) {
  Workout.findById(req.params.id)
          console.log( workout)
          res.render('workouts/show', { workout});

  
}
  