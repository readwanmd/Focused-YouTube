const { Schema, model } = require('mongoose');

const adminAttendanceModel = new Schema(
	{
		timeLimit: {
			type: Number,
			required: true,
			max: 30,
			min: 5,
			default: 5,
		},
		status: {
			type: String,
			required: true,
			enum: ['RUNNING', 'COMPLETED'],
			default: 'RUNNING',
		},
	},
	{ timestamps: true }
);

const AdminAttendance = model('AdminAttendance', adminAttendanceModel);
module.exports = AdminAttendance;
