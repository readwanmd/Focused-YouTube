const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(globalMiddleware);
app.use(require('./routes'));
app.use(express.static('./public'));

app.use((req, res, next) => {
	const error = new Error(`404 Not Found`);
	error.status = 404;

	next(error);
});

app.use((error, req, res, next) => {
	console.log('Error: ', error);
	if (error.status) {
		return res.status(error.status).send(error.message);
	}
	res.status(500).send('Something went wrong!');
});

//Custom middleware signature
//if everything seemds ok then controler will call res
//if everything seemds ok then middleware will call next
function handler(req, res, next) {}

function middlewareSignature(req, res, next) {
	next();
}

function globalMiddleware(req, res, next) {
	console.log(`${req.method} - ${req.url}`);
	console.log('This is a global middleware');

	if (req.query.bad) {
		return res.status(400).send({ message: 'bad request' });
	}

	next();
}

function localMiddleware(req, res, next) {
	console.log('This is a local middleware');

	next();
}

app.listen(8080, (req, res) => {
	console.log('App listening on port 8080');
});
