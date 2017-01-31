//ROUTES
module.exports = function(app){

    var indexController = require('./controllers/index');

    app.get('/admin', indexController.getAdminPage);

    //landing page
    app.get('/', indexController.getIndex);

	//list page
    app.get('/list', indexController.findAllServiceData);

    //compare page
    app.get('/compare', indexController.getComparePage);
    app.post('/compare', indexController.postCompareData);

    //about page
    app.get('/about', indexController.getAboutPage);

    //contact page
    app.get('/contact', indexController.getContactPage);
    //app.post('/contact', indexController.contactFormInterval);
    app.post('/contact', indexController.postContactMessage);
    app.post('/captchaTest', indexController.captchaTest);

    //detail page
    app.get('/:serviceName', indexController.getDetailPage);
    //app.post('/detail', indexController.postDetailData);

    app.get('/.well-known/acme-challenge/:id', indexController.challengeRoute);

    //catch 404
    app.use('*', indexController.notFound);
};