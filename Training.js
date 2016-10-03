var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TrainingSchema = new Schema({
	distance: {
		type: String
	},
	level: {
		type: String
	},
	week1: [
	]
	
}, { collection:'trainingPlans'});

var Training = mongoose.model('training', TrainingSchema);

module.exports = Training;