const Workout = require('../models/workout');
const Trainer = require('../models/trainer');
const User = require('../models/user');

module.exports = {
  index,
  new: newWorkout,
  create,
  show,
};


function index(req, res) {
  Trainer.find({}, function (err, trainers) {
    res.render('trainers/index', {
      trainers,
      user: req.user
    });
  });
}

function newWorkout(req, res) {
  req.user.workouts.push(req.body);
  req.user.save(function (err) {
    res.redirect('/trainers');
  });
}


function create(req, res) {
  req.body.createdBy = req.user._id;
  Workout.create(req.body, function (err, workout) {
    res.redirect('/trainers');

  });
}

function show(req, res) {
  Workout.findById(req.params.id)
    .populate('createdBy').populate('workout.createdBy').exec(function (err, workout) {
      res.redirect('/trainers');
 });

} 