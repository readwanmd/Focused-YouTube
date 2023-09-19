const router = require('express').Router();
const db = require('../db/db');

router.get('/', (req, res) => {
	const books = db.find();

	res.status(200).json(books);
});

router.post('/add', (req, res) => {
	const { bookname, author, price } = req.body;

	const book = db.addBook(bookname, author, price);

	res.status(201).json(book);
});

router.get('/find/i/:id', (req, res) => {
	const id = req.params.id;
	const book = db.findById(id);

	res.status(200).json(book);
});

router.get('/find/a/:author', (req, res) => {
	const author = req.params.author;
	const book = db.findByAuthor(author);

	res.status(200).json(book);
});

router.get('/find/b/:bookname', (req, res) => {
	const bookname = req.params.bookname;
	const book = db.findByBookName(bookname);

	res.status(200).json(book);
});

router.get('/search', (req, res) => {
	const price_bellow = req.query.price_bellow;
	const price_above = req.query.price_above;

	let book;
	if (req.query.price_bellow) {
		book = db.findByPrice_bellow(price_bellow);
	} else if (req.query.price_above) {
		book = db.findByPrice_above(price_above);
	}

	res.status(200).json(book);
});

router.patch('/update/:id', (req, res) => {
	const id = req.params.id;

	const updatedBook = db.updateBook(id, req.body);

	res.status(200).json({
		message: 'Update Successfully',
		updatedBook,
	});
});

router.delete('/delete/i/:id', (req, res) => {
	const id = req.params.id;

	db.deleteById(id);

	res.status(203).send();
});

router.delete('/delete/a/:author', (req, res) => {
	const author = req.params.author;

	db.deleteByAuthor(author);

	res.status(203).send();
});

module.exports = router;
