//index controller
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ServiceData = mongoose.model('ServiceData')
const nodemailer = require('nodemailer')
const request = require('request')
const path = require('path')

const ApiResponse = require('../helper/ApiResponse')
// const Scraper = require('../helper/Scraper')

let contactFormSubmitReady = false // eslint-disable-line

const isProd = process.env.NODE_ENV === 'production'

// const mockData =
// 	[
// 		{
// 			'_id': '57abde66036e3a3f9dadb712',
// 			'name': 'Getaround',
// 			'logo': '/images/assets/logos/getaround.png',
// 			'membershipFee': '0',
// 			'avgPriceDay': '48.00',
// 			'gas': 'gas not included',
// 			'url': {
// 				'signUp': 'https://www.getaround.com/'
// 			}
// 		},
// 		{
// 			'_id': 'test123',
// 			'name': 'Maven',
// 			'logo': '/images/assets/logos/maven.png',
// 			'membershipFee': '0',
// 			'avgPriceDay': '48.00',
// 			'gas': 'gas not included',
// 			'url': {
// 				'signUp': 'https://www.getaround.com/'
// 			}
// 		}
// 	]
//get the index page when user navigates to '/' route
exports.getIndex = (req, res, next) => {
	var options = {
		root: path.resolve(__dirname, '../public/'),
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}

	res.sendFile('index.html', options, err => {
		if (err) {
			console.error('error ', err)
			next(err)
		}
	})
	// ServiceData.find({}, { 'name': 1, 'logo': 1 }, function(err, results) {
	// 	// console.log('results are ' + results)
	// 	return res.render('index')
	// 	// return res.render('index', { 'ServiceData': results })
	// })
}

// exports.getComparePage = function(req, res) {
// 	return res.render('compare', { 'services': app.locals.services })
// }

exports.postCompareData = (req, res) => {
	const serviceName = req.body['selSrv[]']
	// console.log(serviceName)
	ServiceData.find({ '_id': { $in: serviceName } }, (err, results) => {
		if (err) {
			console.log('Error is ' + err)
			res.send((err === null) ? { msg: '' } : { msg: 'Error, ' + err })
		} else {
			app.locals.services = results
			console.log('results are ' + results)
			res.json(ApiResponse.buildRes({ data: { 'services': results } }))
			//res.render('compare', {'services':results})
			// res.end()
		}
	})
}

//get all services for list page
exports.findAllServiceData = async (req, res) => {
	// ServiceData.find({},
	// 	{
	// 		'_id': 1,
	// 		'name': 1, 
	// 		'logo': 1, 
	// 		'membershipFee': 1, 
	// 		'avgPriceDay': 1, 
	// 		'gas': 1, 
	// 		'url.signUp': 1
	// 	}, (err, results) => {
	// 		if (!isProd) res.set({ 'Access-Control-Allow-Origin': '*' })
	// 		res.json(ApiResponse.buildRes({ data: { ServiceData: results } }))
	// 	}
	// )
	ServiceData.find({}, {}, (err, results) => {
		if (!isProd) res.set({ 'Access-Control-Allow-Origin': '*' })
		res.json(ApiResponse.buildRes({ data: { ServiceData: results } }))
	})
	// const scraper = new Scraper()
	// const html = await scraper.requestPage({ url: 'https://www.getaround.com/tour' })
	// console.log('html', html)
	// if (!isProd) res.set({ 'Access-Control-Allow-Origin': '*' })
	// res.json(ApiResponse.buildRes({ data: { ServiceData: mockData } }))
}

//get by id for detail page
exports.getDetailPage = (req, res) => {
	const name = req.params.serviceName
	console.log('in services route', name)
	ServiceData.find({ 'name': name }, (err, results) => {
		// console.log(results.length)
		if (err) {
			// console.log('Error is ' + err)
			res.send(ApiResponse.buildRes({ error: err ? `Error, ${err}` : '' }))
		} else if (!results.length) {
			res.status(404).json(ApiResponse.buildRes({ error: 'could not find service by that name' }))
		} else {
			// res.render('detail', { 'ServiceData': results })
			res.json(ApiResponse.buildRes({ data: { 'ServiceData': results } }))
		}
	})
}

// TOOD - remove this
exports.getAboutPage = function (req, res) {
	return res.render('about')
}

exports.getContactPage = function (req, res) {
	var contactPageInterval = setInterval(function () {
		contactFormSubmitReady = true
		// console.log('form submit status: ' + contactFormSubmitReady)
		clearInterval(contactPageInterval)
	}, 10000)
	return res.render('contact')
}

exports.postContactMessage = function (req, res) {
	// console.log(req.connection.remoteAddress)
	var mailOpts, transporter
	transporter = nodemailer.createTransport({
		service: 'Mailgun',
		auth: {
			user: process.env.MAILGUN_USER,
			pass: process.env.MAILGUN_PASS
		}
	})
	//mail options
	mailOpts = {
		from: req.body.name + ' ' + req.body.email,
		to: 'support@mail.carsharecompare.com',
		subject: 'New CarShare Compare Contact Message',
		text: req.body.message
	}

	// send message
	transporter.sendMail(mailOpts, function (error) {
		//email not sent
		if (error) {
			res.send({ header: 'Error, Message Not Sent', body: error.response })
		}
		//Yay!! email sent
		else {
			res.send({ header: 'Great Success', body: 'Thanks, we\'ll be in touch.' })
		}
	})
}

exports.getAdminPage = function (req, res) {
	return res.render('admin')
}

exports.captchaTest = function (req, res) {
	var captchaResponseCode = req.body.response
	if (captchaResponseCode != undefined && captchaResponseCode != '' && captchaResponseCode != null) {
		var verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + process.env.CAPTCHA_SECRECT_KEY + '&response=' + captchaResponseCode
		// Hitting GET request to the URL, Google will respond with success or error scenario.
		request(verificationUrl, function (error, response, body) {
			body = JSON.parse(body)
			// Success will be true or false depending upon captcha validation.
			if (body.success !== undefined && !body.success) {
				res.send({ 'responseCode': 1, 'responseDesc': 'Failed captcha verification' })
			} else {
				res.send({ 'responseCode': 0, 'responseDesc': 'Success' })
			}
		})
	} else {
		res.send({ 'responseCode': 1, 'responseDesc': 'Failed captcha verification' })
	}
}

// for https cert challange
exports.challengeRoute = function (req, res) {
	// console.log(req.params.id)
	res.send(req.params.id + '.' + '75Ufzyk1ouhSrCnxn_kqZfztkLiJ0aSrV18wpMJpqqc')
}

exports.signUp = function (req, res) {
	res.render('signup')
}

//Handle 404 - not found
exports.notFound = function (req, res) {
	res.json(ApiResponse.buildRes({ error: 'Not Found', code: 404 }))
}
