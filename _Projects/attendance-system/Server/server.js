const express = require('express');
const connectDB = require('./db');
const authenticate = require('./middleware/authenticate');

const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.get('/private', authenticate, async (req, res) => {
	console.log('User:', req.user);
	return res.status(200).json({ message: 'This is Private Route!' });
});

app.get('/public', (req, res) => {
	return res.status(200).json({ message: 'This is Public Route!' });
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
	const message = err.message ? err.message : 'server error occured';
	const status = err.status ? err.status : 500;

	res.status(status).json({ message });
});

connectDB('mongodb://127.0.0.1:27017/attendance-db')
	.then(() => {
		console.log('Database Connected');
		app.listen(4444, () => {
			console.log('listening on port 4444');
		});
	})
	.catch((err) => {
		console.log(err);
	});
