const router = require('express').Router();
const { homeRouteControler, aboutRouteControler } = require('./controller');

router.get('/', homeRouteControler);

router.get('/about', aboutRouteControler);

module.exports = router;
