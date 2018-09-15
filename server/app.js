var express = require('express')
var app = express()
var Router = express.Router()
var path = require('path')
// var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
require('dotenv').config()

//set the port to run on one that is specified or 5000
app.set('port', (process.env.PORT || 5000))

//set connection string to local db
//var localMongoUri = 'mongodb://127.0.0.1/Services'
mongoose.connect(process.env.MONGODB_URI)
var db = mongoose.connection
db.on('error', function() {
	throw new Error('unable to connect to database')
})

// uncomment after placing favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// set the publicly accessible path for assets
app.use(express.static(path.join(__dirname, 'public')))

/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found')
	err.status = 404
	next(err)
})*/

// error handlers

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500)
		res.render('error', {
			message: err.message,
			error: err
		})
	})
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500)
	res.render('error', {
		message: err.message,
		error: {}
	})
})

/*module.exports = app*/
//require models file
require('./models/Services')
//require routes file for all routing
require('./routes')(app, Router)

//start the app and listen on the specified port
app.listen(app.get('port'), function(){
	if(process.env.NODE_ENV === 'development') {
		console.log('(Dev) We\'re running on port', app.get('port'))
	} else {
		console.log('We\'re running on port', app.get('port'))
	}
})