const router = require('express').Router();
const {
	getDisable,
	getEnable,
	getStatus,
} = require('../controller/adminAttendance');

router.get('/enable', getEnable);
router.get('/disable', getDisable);
router.get('/status', getStatus);

module.exports = router;
