const router = require('express').Router();

router.use('/api/v1/books', require('../router/books'));

router.get('/', (_req, res) => {
	res.status(200).json({ message: 'Book-Store_API' });
});

router.get('/health', (_req, res) => {
	res.status(200).json({ message: 'Success' });
});

module.exports = router;
