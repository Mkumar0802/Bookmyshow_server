var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
// var authorise = require("./Module/authModule");
var registerRouter = require("./routes/reg");
var mongo=require('./connection')
var movieRouter = require('./routes/movie')
var theatreRouter = require('./routes/theatre')
var contactRouter = require('./routes/contact')
var paymentRouter= require ("./routes/Payment")
var userRoutes = require("./routes/userRoutes")
var cors = require('cors')

require("dotenv").config();
// var authorise = require('./Module/authModule')
mongo.connect()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/auth",registerRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movie',movieRouter)
app.use('/theatre',theatreRouter)
app.use('/contact',contactRouter)
app.use('/payment',paymentRouter)
app.use("/users", userRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');  
});

app.listen(port, () => {
    console.log(`server is running at ${port}`);
  });




module.exports = app;