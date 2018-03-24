//services model

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//-------------------------------- Start Service Schema ------------------------------

const ServiceSchema = new Schema({
	'name':String,
	'logo': String,
	'cities':[String],
	'signUpFee':String,
	'membershipFee':String,
	'vehicleTypes':[String],
	'serviceType':String,
	'avgPriceHour':String,
	'avgPriceDay':String,
	'gas':String,
	'tolls':String,
	'uniqueFeatures':String,
	'signUpDocs':[String],
	'milageLimtDay':String,
	'overMilageCost':String,
	'mobileApp':String,
	'insurance':String,
	'ageRequirement':String,
	'carPickupProcess':String,
	'overNightTrips':String,
	'hourlyRentals':String,
	'roadsideAssistance':String,
	'url':{
		'home':String,
		'terms':String,
		'signUp':String
	}
})

//tell mongoose that from now on we will refer to this collection as 'ServiceData' using the schema 'ServiceSchema'
mongoose.model('ServiceData', ServiceSchema)