const notFoundHandler = (_req, _res, next) => {
	const err = new Error('Resource Not Found!');
	err.status = 404;

	next(err);
};

const errorHandler = (error, req, res, next) => {
	if (error.status) {
		return res.status(error.status).json({
			message: error.message,
		});
	}
	res.status(500).json({
		message: 'Something went wrong!',
	});
};

module.exports = {
	notFoundHandler,
	errorHandler,
};
