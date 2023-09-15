const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const pollController = require('./pollController');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/create', pollController.createPollGetControler);
app.post('/create', pollController.createPollPostControler);

app.get('/polls', pollController.getAllPolls);
app.get('/polls/:id', pollController.viewPollGetController);
app.post('/polls/:id', pollController.viewPollPostController);

app.get('/', (req, res) => {
	res.render('home');
});

// Connect to MongoDB
mongoose
	.connect('mongodb://127.0.0.1:27017/Poll-System', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(3000, () => {
			console.log('Listening on port 3000');
		});
	})
	.catch((err) => {
		console.error('Error connecting to MongoDB:', err);
	});
