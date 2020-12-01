const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        enum: ['Strength', 'Stretch']
   
    },
    problemArea: {
        type: String,
        enum: ['Knee Pain', 'Neck Pain', 'Knee Arthritis', 'Back Pain', 'Hip Pain', 'Foot Pain', 'Arm Pain']
    },
    routine: {
        type: String,
        enum: ['Calf Stretch','Forearm Stretch','Knee Stretch','Back Stretch','Back Strength','Calf Strength','Forearm  Strength','Knee Strength','Neck Stretch','Neck Strength’','Hip Strength','Hip Stretch']
    },
    reps: {
        type: Number,
        min: 5,
        max: 10

    },
    Workout: [WorkoutSchema],
        createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
              
            }
}, { timestamps: true });
        module.exports = mongoose.model('Workout', workoutSchema);