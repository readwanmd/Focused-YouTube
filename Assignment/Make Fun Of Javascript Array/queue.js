const MAX_SIZE = 30;
class Queue {
	constructor() {
		this.front = 0;
		this.rear = 0;
		this.queue = new Array(MAX_SIZE);
	}

	enqueue(item) {
		if (this.rear === MAX_SIZE) {
			console.log('Queue is full');
			return false;
		}
		this.queue[this.rear++] = item;
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log('Empty Queue');
			return false;
		}
		const item = this.queue[this.front];
		for (let i = this.front; i < this.rear - 1; i++) {
			this.queue[i] = this.queue[i + 1];
		}
		delete this.queue[--this.rear];
		return true;
	}

	showQueue() {
		if (this.isEmpty()) {
			console.log('Empty Queue');
			return false;
		}

		for (let i = this.front; i < this.rear; i++) {
			console.log(`[Displaying]`, this.queue[i]);
		}
	}

	next() {
		if (this.isEmpty()) {
			console.log('Empty Queue');
			return false;
		}
		return this.queue[this.front];
	}

	isEmpty() {
		return this.front === this.rear;
	}
}

const queue = new Queue();

queue.enqueue('task 1');
queue.enqueue('task 2');
queue.enqueue('task 3');

// console.log(queue);
// console.log(queue.showQueue());

// console.log(queue);
// console.log(queue.next());

// console.log(queue.showQueue());

//js Array Queue Method
const q = [];
q.push('task 1');
q.push('task 2');
q.push('task 3');
q.push('task 4');
console.log(q.shift());

console.log(q);
