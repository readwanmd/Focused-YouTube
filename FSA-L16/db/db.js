const Ticket = require('../models/Ticket');

class MyDB {
	constructor() {
		this.tickets = [];
	}

	/**
	 * create and save new ticket or sell ticket
	 * @param {string} username
	 * @param {number} price
	 * @returns {Ticket} return a ticket object
	 */
	create(username, price) {
		const ticket = new Ticket(username, price);
		this.tickets.push(ticket);
		return ticket;
	}

	/**
	 * sell multiple tickets
	 * @param {string} username
	 * @param {number} price
	 * @param {number} quantity
	 * @returns {Array<Ticket>}
	 */
	bulkCreate(username, price, quantity) {
		const result = [];

		for (let i = 0; i < quantity; i++) {
			const ticket = this.create(username, price);

			result.push(ticket);
		}

		return result;
	}

	// return all tickets;
	find() {
		return this.tickets;
	}

	/**
	 * return single ticket
	 * find ticket by ticket id
	 * @param {string} ticketId
	 * @returns {Ticket}
	 */
	findById(ticketId) {
		const ticket = this.tickets.find((t) => t.ticketId === ticketId);

		return ticket;
	}

	/**
	 * find all tickets of a user
	 * @param {string} user
	 * @returns {Ticket} returns array of ticket
	 */
	findByUser(username) {
		const tickets = this.tickets.filter((t) => t.username === username);
		return tickets;
	}

	/**
	 *
	 * @param {string} tickrtID
	 * @param {{username: string, price: number}} ticketBody
	 * @returns {Ticket}
	 */
	updateById(tickrtID, ticketBody) {
		const ticket = this.findById(tickrtID);
		ticket.username = ticketBody.username;

		ticket.username = ticketBody.username ?? ticket.username;
		ticket.price = ticketBody.price ?? ticket.price;

		ticket.updatedAt = new Date();

		return ticket;
	}

	/**
	 * delete ticket by id
	 * @param {string} ticketId
	 */
	deleteById(ticketId) {
		const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

		if (index !== -1) {
			this.tickets.splice(index, 1);
			return true;
		} else {
			return false;
		}
	}

	/**
	 * raffel draw to find winner
	 * @param {number} winnerCount
	 * @returns {Array<Ticket>}
	 */
	draw(winnerCount) {
		let indexes = new Array(winnerCount);

		for (let i = 0; i < indexes.length; i++) {
			let index = Math.floor(Math.random() * this.tickets.length);

			while (indexes.includes(index)) {
				index = Math.floor(Math.random() * this.tickets.length);
			}

			index.push(index);
		}

		const winners = indexes.map((index) => this.tickets[index]);
		return winners;
	}
}

const myDB = new MyDB();
module.exports = myDB;
