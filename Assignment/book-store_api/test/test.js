const myDB = require('../db/db');

myDB.addBook('Book1', 'Author1', 151);
myDB.addBook('Book2', 'Author1', 120);
myDB.addBook('Book3', 'Author2', 140);
myDB.addBook('Book4', 'Author3', 190);
myDB.addBook('Book5', 'Author4', 170);
myDB.addBook('Book6', 'Author3', 121);
myDB.addBook('Book7', 'Author5', 112);
myDB.addBook('Book8', 'Author3', 192);
myDB.addBook('Book9', 'Author5', 187);

const books = myDB.findBookByBookName('Book9');

console.log(books);
