const { Schema, model } = require('mongoose');

const adminAttendanceModel = new Schema({
	timeLimit: Number,
	Status: String,
	createdAt: Date,
});

const AdminAttendance = model('AdminAttendance', adminAttendanceModel);
module.exports = AdminAttendance;
