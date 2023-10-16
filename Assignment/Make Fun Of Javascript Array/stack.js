const MAX_SIZE = 3;
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

		let item = this.list[this.top];
		delete this.list[this.top];
		this.top--;
		return item;
	}

	peak() {
		if (this.isEmpty()) {
			console.log('Stack Underflow');
			return false;
		}
		return this.list[this.top];
	}

	isEmpty() {
		return this.top === -1;
	}
}

const stack = new Stack();
const text = 'fdsaa';
for (let i = 0; i < text.length; i++) {
	stack.push(text.charAt(i));
}

let reversedText = '';
while (!stack.isEmpty()) {
	reversedText += stack.pop();
}

console.log(stack);
console.log(reversedText);

//js Array Stack Method
const text1 = 'asdfghjkl';
const jsStack = [];

for (let i = 0; i < text1.length; i++) {
	jsStack.push(text1.charAt(i));
}

let reversedText1 = '';
while (jsStack.length) {
	reversedText1 += jsStack.pop();
}

console.log(reversedText1);
