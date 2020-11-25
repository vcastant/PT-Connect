const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');

const workoutsRouter = require('./routes/workouts');


const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/workouts', workoutsRouter);


app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});
