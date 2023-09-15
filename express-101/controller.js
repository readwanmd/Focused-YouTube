exports.homeRouteControler = (req, res) => {
	// const error = new Error(`Something went wrong!`);
	// error.status = 400;
	// throw error;

	res.send('This is home route.');
};

exports.aboutRouteControler = (req, res) => {
	res.send('This is about route.');
};
