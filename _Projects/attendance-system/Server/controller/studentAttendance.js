const { addMinutes, isAfter } = require('date-fns');
const error = require('../utils/error');
const AdminAttendance = require('../models/AdminAttendance');
const StudentAttendance = require('../models/StudentAttendance');

const getAttendance = async (req, res, next) => {
	const { id } = req.params;
	try {
		const adminAttendance = await AdminAttendance.findById(id);
		if (!adminAttendance) {
			throw error('Invalid Attendance ID', 400);
		}

		if (adminAttendance.status === 'COMPLETED') {
			throw error('Attendance already completed');
		}

		let attendance = await StudentAttendance.findOne({
			adminAttendance: id,
			user: req.user._id,
		});

		if (attendance) {
			throw error('Attendance already register', 400);
		}

		attendance = new StudentAttendance({
			user: req.user._id,
			adminAttendance: id,
		});

		await attendance.save();

		return res.status(201).json({ message: 'Success', attendance });
	} catch (error) {
		next(error);
	}
};

const getAttendanceStatus = async (_req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: 'RUNNING' });
		if (!running) {
			throw error('Not Running!', 400);
		}

		const started = addMinutes(new Date(running.createdAt), running.timeLimit);

		if (isAfter(new Date(), started)) {
			running.status = 'COMPLETED';

			await running.save();
		}

		return res.status(200).json({ running });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAttendance,
	getAttendanceStatus,
};
