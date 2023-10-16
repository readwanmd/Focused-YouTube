const MAX_SIZE = 5;
class Stack {
	constructor() {
		this.list = new Array(MAX_SIZE);
		this.top = -1;
	}

	push(item) {
		if (this.top >= MAX_SIZE - 1) {
			console.log('Stack Overflow');
			return false;
		}
		this.list[++this.top] = item;
		console.log(this.top, ':', item);
		return true;
	}

	pop() {
		if (this.isEmpty()) {
			console.log('Stack Underflow');
			return false;
		}
		const item = this.list[this.top];
		delete this.list[this.top];
		this.top--;
		return item;
	}

	peek() {
		return this.list[this.top];
	}

	isEmpty() {
		return this.top === -1;
	}
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('f');

stack.pop();

console.log(stack.peek());

console.log(stack);
