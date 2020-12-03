const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        enum: ['Strength', 'Stretch']
   
    },
    problemArea: {
        type: String,
        enum: ['Knee Pain', 'Neck Pain', 'Back Pain', 'Hip Pain', 'Foot Pain', 'Arm Pain']
    },
    routine: {
        type: String,
        enum: ['Knee Strength','Knee Stretch','Neck Stretch','Neck Strength','Back Strength','Back Stretch','Calf Strength','Calf Stretch','Forearm Stretch','Forearm Strength','Hip Strength','Hip Stretch']
    },
    reps: {
        type: Number,
        min: 5,
        max: 10

            }
}, { timestamps: true });
        module.exports = mongoose.model('Workout', workoutSchema);