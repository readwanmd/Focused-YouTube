const router = require('express').Router();
const {
	getAttendance,
	getAttendanceStatus,
} = require('../controller/studentAttendance');

router.get('/ststus', getAttendanceStatus);

router.get('/:id', getAttendance);

module.exports = router;
