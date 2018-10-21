//gulp file

var gulp = require('gulp')
var child_process = require('child_process')

gulp.task('start', function () {
	child_process.exec('mongod --dbpath="/Users/jeremy/Documents/data/db"', function (err, stdout, stderr) {
		console.log(stdout)
	})
	child_process.exec('"node app.js"', function (err, stdout, stderr) {
		console.log(stdout)
	})
})

gulp.task('default', ['start'])