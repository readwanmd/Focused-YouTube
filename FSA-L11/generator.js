// function* myGenerator() {
// 	yield 1;
// 	yield 2;
// }

// const iterator = myGenerator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* range(start = 0, stop = 100, step = 5) {
// 	for (let i = start; i <= stop; i += step) {
// 		yield i;
// 	}
// }

// const rangeIt = range(0, 10, 3);
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());

// for (let v of range(0, 50, 2)) {
// 	console.log(v);
// }

function* generateId() {
	index = 1;
	while (true) {
		yield index++;
	}
}

const userId = generateId();
const productId = generateId();

console.log('user: ', userId.next().value);
console.log('user: ', userId.next().value);
console.log('user: ', userId.next().value);

console.log('product: ', productId.next().value);
console.log('product: ', productId.next().value);
console.log('product: ', productId.next().value);
console.log('product: ', productId.next().value);
