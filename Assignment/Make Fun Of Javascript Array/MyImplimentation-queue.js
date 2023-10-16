const MAX_SIZE = 5;
class Queue {
	constructor() {
		this.front = 0;
		this.back = 0;
		this.queue = new Array(MAX_SIZE);
	}

	enqueue(value) {
		if (this.back >= MAX_SIZE) {
			console.log('Queue is full');
			return false;
		}

		this.queue[this.back] = value;
		console.log(this.queue);
		this.back++;
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log('Empty Queue');
			return false;
		}
		const item = this.queue[this.front];

		for (let i = this.front; i <= this.back; i++) {
			this.queue[i] = this.queue[i + 1];
		}
		delete this.queue[--this.rear];
		return true;
	}

	next() {
		if (this.isEmpty()) {
			console.log('Empty Queue');
			return false;
		}
		return this.queue[this.front];
	}

	showQueue() {}

	isEmpty() {
		return this.front === this.back;
	}
}

const queue = new Queue();

queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(1);
queue.enqueue(1);
console.log(queue);
console.log(queue.next());
