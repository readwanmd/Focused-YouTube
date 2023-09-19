const Book = require('../models/Books');

class MyDB {
	constructor() {
		this.books = [];
	}

	// return a list of all books
	find() {
		return this.books;
	}

	// add a book
	addBook(bookname, author, price) {
		const book = new Book(bookname, author, price);
		this.books.push(book);

		return book;
	}

	// find a book by id
	findById(id) {
		const book = this.books.find((book) => book.id === id);

		return book;
	}

	// find a book by author
	findByAuthor(author) {
		const book = this.books.filter(
			(item) => item.author.indexOf(author) !== -1
		);

		return book;
	}

	// find a book by title
	findByBookName(bookname) {
		const book = this.books.filter(
			(item) => item.bookname.indexOf(bookname) !== -1
		);

		return book;
	}

	//find book by price
	findByPrice_bellow(price) {
		const book = this.books.filter((book) => book.price <= price);

		return book;
	}

	//find book by price
	findByPrice_above(price) {
		const book = this.books.filter((book) => book.price >= price);

		return book;
	}

	// updateBook by id
	updateBook(id, details) {
		const book = this.findById(id);
		book.author = details.author ?? book.author;
		book.bookname = details.bookname ?? book.bookname;
		book.price = details.price ?? book.price;

		book.updatedAt = new Date();

		return book;
	}

	// delete book By Id
	deleteById(id) {
		const index = this.books.findIndex((book) => book.id === id);

		if (index !== -1) {
			this.books.splice(index, 1);

			return true;
		} else {
			return false;
		}
	}

	//delete book by author
	deleteByAuthor(author) {
		let i = 0;
		while (i < this.books.length) {
			if (this.books[i].author === author) {
				this.books.splice(i, 1);
			} else {
				++i;
			}
		}
		return true;
	}
}

const myDB = new MyDB();
module.exports = myDB;
