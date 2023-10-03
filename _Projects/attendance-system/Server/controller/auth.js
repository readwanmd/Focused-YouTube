const { registerService, loginService } = require('../service/auth');

const registerController = async (req, res, next) => {
	const { name, email, password, accountStatus } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ message: 'Invalid Data' });
	}

	try {
		const user = await registerService({ name, email, password });
		res.status(201).json({ message: 'user created successfully', user });
	} catch (error) {
		next(error);
	}
};

const loginController = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const token = await loginService({ email, password });
		return res.status(200).json({ message: 'Login Successful', token });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	registerController,
	loginController,
};
