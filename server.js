const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require ('passport');
const session = require('express-session');
const port = process.env.PORT || 3000;


const workoutsRouter = require('./routes/workouts');
const trainersRouter = require('./routes/trainers');
const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

require('dotenv').config();

require ('./config/passport');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(session({
    resave: false,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true
}));


app.use(function(req, res, next) {
    res.locals.user = req.user
    next();
});

app.use(passport.initialize());
app.use(passport.session());


app.use('/workouts', workoutsRouter);
app.use('/', trainersRouter);
app.use('/', indexRouter);

app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});
