const express = require('express');

const app = express();

app.get('/', (req, res) => {
	const obj = {
		name: 'test',
		email: 'test@example.com',
	};

	res.json(obj);
});

app.listen(8080, () => {
	console.log('listening on port 8080');
});
