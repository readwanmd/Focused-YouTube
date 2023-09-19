const shortid = require('shortid');

class Book {
	/**
	 *
	 * @param {String} bookname
	 * @param {String} author
	 * @param {Number} price
	 */
	constructor(bookname, author, price) {
		this.id = shortid.generate();
		this.bookname = bookname;
		this.author = author;
		this.price = price;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}

module.exports = Book;
