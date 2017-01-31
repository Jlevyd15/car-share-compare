//index controller
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ServiceData = mongoose.model('ServiceData');
var nodemailer = require('nodemailer');
var request = require('request');
var contactFormSubmitReady = false;

//get the index page when user navigates to '/' route
exports.getIndex = function(req, res) {
    //return res.render('index');
    ServiceData.find({},{"name":1, "logo":1}, function(err, results) {
    console.log("results are " + results);
    return res.render('index', { "ServiceData": results });
  });
};

exports.getComparePage = function(req, res) {
    return res.render('compare', {"services": app.locals.services });
};

exports.postCompareData = function(req, res){
    var serviceName = req.body['selSrv[]'];
    console.log(serviceName);
    ServiceData.find({'_id': { $in: serviceName }}, function(err, results){
        if(err){
            console.log("Error is " +err);
            res.send((err === null) ? { msg: ''} : { msg: 'Error, ' + err});        
        }else{
            app.locals.services = results;
            //console.log("results are " + results);
            //res.render('compare', {"services":results});
            res.end();
        }
    });
};

//get all services for list page
exports.findAllServiceData = function(req, res) {
  ServiceData.find({},{"_id":1, "name":1, "logo":1, "membershipFee":1, 
    "avgPriceDay":1, "gas":1, "url.signUp":1}, function(err, results) {
    //console.log("results are " + results);
    return res.render('list', { "ServiceData": results });
  });
};

//get by id for detail page
exports.getDetailPage = function(req, res){
    var name = req.params.serviceName;
    ServiceData.find({'name': name}, function(err, results){
        if(err){
            console.log("Error is " +err);
            res.send((err === null) ? { msg: ''} : { msg: 'Error, ' + err});        
        }else{
            return res.render('detail', {"ServiceData": results });
        }
    });
};

exports.getAboutPage = function(req, res) {
    return res.render('about');
};

exports.getContactPage = function(req, res) {
    var contactPageInterval = setInterval(function(){
        contactFormSubmitReady = true;
        console.log("form submit status: " + contactFormSubmitReady);
        clearInterval(contactPageInterval);
    },10000);
    return res.render('contact');
};

exports.postContactMessage = function(req, res) {
    console.log(req.connection.remoteAddress);
    var mailOpts, transporter;
    transporter = nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: process.env.MAILGUN_USER,
            pass: process.env.MAILGUN_PASS
        }
    });
    //mail options
    mailOpts = {
        from: req.body.name + ' ' + req.body.email,
        to: 'support@mail.carsharecompare.com',
        subject: 'New CarShare Compare Contact Message',
        text: req.body.message
    };

    // send message
    transporter.sendMail(mailOpts, function(error, info) {
        //email not sent
        if (error) {
            res.send({header: 'Error, Message Not Sent' , body: error.response});
        }
        //Yay!! email sent
        else {
            res.send({header: 'Great Success', body: 'Thanks, we\'ll be in touch.'});
        }
    });
};

exports.getAdminPage = function(req, res) {
    return res.render('admin');
}

exports.captchaTest = function(req, res) {
    var captchaResponseCode = req.body.response;
    if( captchaResponseCode != undefined && captchaResponseCode != '' && captchaResponseCode != null){
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret="+ process.env.CAPTCHA_SECRECT_KEY +"&response=" +captchaResponseCode;
        // Hitting GET request to the URL, Google will respond with success or error scenario.
        request(verificationUrl,function(error,response,body) {
        body = JSON.parse(body);
        // Success will be true or false depending upon captcha validation.
            if(body.success !== undefined && !body.success) {
                res.send({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
            }else{
                res.send({"responseCode" : 0,"responseDesc" : "Success"});
            }
        });
    }else{
        res.send({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
}

// for https cert challange
exports.challengeRoute = function(req, res) {
    console.log(req.params.id);
    res.send(req.params.id)
}

//Handle 404 - not found
exports.notFound = function(req, res) {
    /*log.info('in 404 route...');*/
    res.sendStatus(404);
};
