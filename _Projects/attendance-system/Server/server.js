const express = require('express');
const connectDB = require('./db');
const bcrypt = require('bcryptjs');

const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/register', async (req, res, next) => {
	const { name, email, password, accountStatus } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ message: 'Invalid Data' });
	}

	try {
		let user = await User.findOne({ email: email });
		if (user) {
			return res.status(400).json({ message: 'User already exists' });
		}

		user = new User({ name, email, password, accountStatus });

		const salt = await bcrypt.genSalt(10);
		console.log('Salt', salt);
		const hash = await bcrypt.hash(password, salt);
		console.log('Password', password);
		user.password = hash;

		await user.save();

		res.status(201).json({ message: 'user created successfully', user });
	} catch (error) {
		next(error);
	}
});

app.post('/login', async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });

		if (!user) {
			return res.status(400).json({ message: 'Invalid Credential' });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid Credential' });
		}

		delete user._doc._id;
		delete user._doc.password;
		delete user._doc.__v;
		return res.status(200).json({ message: 'Login Successful', user: user });
	} catch (error) {
		next(error);
	}
});

app.get('/', (_req, res) => {
	const obj = {
		name: 'test',
		email: 'test@example.com',
	};

	res.json(obj);
});

app.use((err, _req, res, _next) => {
	console.log(err);
	res.status(500).json({ message: 'server error occured' });
});

connectDB('mongodb://127.0.0.1:27017/attendance-db')
	.then(() => {
		console.log('Database Connected');
		app.listen(8080, () => {
			console.log('listening on port 8080');
		});
	})
	.catch((err) => {
		console.log(err);
	});
