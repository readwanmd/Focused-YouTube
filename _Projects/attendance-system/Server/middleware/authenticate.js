const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticate(req, res, next) {
	try {
		let token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({ message: 'Unauthorised' });
		}

		token = token.split(' ')[1];
		const decoded = jwt.verify(token, 'secret-key');

		const user = await User.findById(decoded._id);
		// console.log(user);

		if (!user) {
			return res.status(401).json({ message: 'Unauthorised' });
		}

		delete user._doc.password;
		req.user = user;
		next();
	} catch (error) {
		return res.status(400).json({ message: 'Invalid Token' });
	}
}

module.exports = authenticate;
