const myDB = require('../db/db');

myDB.create('user 1', 10);
myDB.create('user 2', 10);
myDB.create('user 3', 10);
myDB.create('user 4', 10);
myDB.create('user 5', 10);
myDB.bulkCreate('user 6', 10, 2);

const tickets = myDB.find();
// console.log('All Tickets: ', tickets);

const winner = myDB.draw(2);
console.log('Winner: ', winner);
