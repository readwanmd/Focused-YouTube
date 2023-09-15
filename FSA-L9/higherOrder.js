/**
 * Higher order function
 * - function can be passed as a argumrnt
 * - function can be return from another function
 */

/**
 * HIdden Concepts
 * - Scope
 * - Closer
 * - Function context
 * - Hoisting
 */

// function generateTwoRandNumber(max, whatDoYouWant) {
// 	const random1 = Math.floor(Math.random() * max);
// 	const random2 = Math.floor(Math.random() * max);

// 	const result = whatDoYouWant(random1, random2);
// 	return result;
// }

// generateTwoRandNumber(100, (rand1, rand2) => {
// 	console.log(rand1, rand2);
// });

// console.log(
// 	generateTwoRandNumber(1000, (rand1, rand2) => {
// 		return rand1 + rand2;
// 	})
// );

// console.log(
// 	generateTwoRandNumber(10, (rand1, rand2) => {
// 		return rand1 * rand2;
// 	})
// );

// function randomSum(max) {
// 	// const random1 = Math.floor(Math.random() * max);
// 	// const random2 = Math.floor(Math.random() * max);
// 	const { random1, random2 } = generateTwoRandNumber();

// 	return random1 + random2;
// }

// function randomSub(max) {
// 	// const random1 = Math.floor(Math.random() * max);
// 	// const random2 = Math.floor(Math.random() * max);
// 	const { random1, random2 } = generateTwoRandNumber();

// 	return random1 - random2;
// }

// function randomSqrSum(max) {
// 	// const random1 = Math.floor(Math.random() * max);
// 	// const random2 = Math.floor(Math.random() * max);
// 	const { random1, random2 } = generateTwoRandNumber();

// 	return random1 * random1 + random2 * random2;
// }

// console.log(randomSqrSum(5));

// function sqr(num) {
// 	return num * num;
// }

// function cube(num) {
// 	return num * num * num;
// }

function power(p) {
	return function (n) {
		let result = 1;
		for (let i = 1; i <= p; i++) {
			result *= n;
		}
		return result;
	};
}

const sqr = power(2);
const cube = power(3);
const power8 = power(8);

console.log(cube(5));
