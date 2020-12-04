const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trainerSchema = new Schema({
    displayName: String,
    email: String,
    avatarURL: String,
    googleId: String,
    experience: Number,
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workouts'}]

        
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);