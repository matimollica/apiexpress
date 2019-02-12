var express = require('express');
var path = require('path');
var usersRouter = require('./routes/users');
var pinsRouter = require('./routes/pins');
var app = express();

app.use('/users', usersRouter);
app.use('/pins', pinsRouter);

module.exports = app;
