const { Schema, model } = require('mongoose');

const studentAttendanceModel = new Schema({
	createdAt: Date,
	user: {
		types: Schema.Types.ObjectId,
		ref: 'User',
	},
	adminAttendance: {
		types: Schema.Types.ObjectId,
		ref: 'AdminAttendance',
	},
});

const StudentAttendance = model('StudentAttendance', studentAttendanceModel);
module.exports = StudentAttendance;
