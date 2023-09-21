const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minLength: [3, 'minimun 3 characters'],
		maxLength: [10, 'maximun 10 characters'],
	},
	lastName: String,
	email: String,
	age: Number,
	bio: String,
	single: Boolean,
});

const Person = mongoose.model('Person', personSchema);

mongoose
	.connect('mongodb://127.0.0.1:27017/mongoose-test', {
		serverSelectionTimeoutMS: 1000,
	})
	.then(async () => {
		console.log('MongoDB Connected!');
		const person = new Person({ firstName: 'kaaaaa' });

		await person.save();

		console.log(person);
	})
	.catch((err) => {
		console.log(err);
	})
	.finally(() => {
		mongoose.connection.close();
	});
