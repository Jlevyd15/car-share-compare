//ROUTES
module.exports = function(app, Router){
    
	const subdomain = require('express-subdomain')
	var indexController = require('./controllers/index')

	//if we're running in production, redirect all to https
	// if(process.env.NODE_ENV !== 'development') {
	//     app.get('*',function(req,res,next){
	//         if(req.headers['x-forwarded-proto']!='https') {
	//             res.redirect('https://carsharecompare.com'+req.url)
	//         }else{
	//             next() /* Continue to other routes if we're not redirecting */
	//         }
	//     })
	// }

	// app.get('/admin', indexController.getAdminPage)

	//landing page
	app.get('/', indexController.getIndex)

	//list page
	Router.get('/list', indexController.findAllServiceData)
	app.use(subdomain('api', Router))
	app.get('/list', indexController.findAllServiceData)

	//compare page
	// app.get('/compare', indexController.getComparePage)
	app.post('/compare', indexController.postCompareData)

	//about page
	app.get('/about', indexController.getAboutPage)

	//contact page
	app.get('/contact', indexController.getContactPage)
	//app.post('/contact', indexController.contactFormInterval)
	app.post('/contact', indexController.postContactMessage)
	app.post('/captchaTest', indexController.captchaTest)

	app.get('/signup', indexController.signUp)

	//detail page
	app.get('/:serviceName', indexController.getDetailPage)
	//app.post('/detail', indexController.postDetailData)

	app.get('/.well-known/acme-challenge/:id', indexController.challengeRoute)

	app.get('/*', indexController.getIndex)

	//catch 404
	app.use('*', indexController.notFound)
}