const mongoose = require('mongoose');

mongoose
	.connect('mongodb://127.0.0.1:27017/attendance', {
		serverSelectionTimeoutMS: 1000,
	})
	.then(() => {
		console.log('Database Connected');

		mongoose.connection.close();
	})
	.catch((err) => console.log(err));
