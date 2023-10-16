const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//average of all elements
let average = numbers.reduce((previous, current, index, arr) => {
	// console.log('previous:', previous);
	// console.log('current:', current);
	previous += current;
	if (index === arr.length - 1) {
		return previous / arr.length;
	}
	return previous;
});

//sum of even number
let even = numbers.reduce((previous, current, index, arr) => {
	if (arr[index] % 2 === 0) previous += current;

	return previous;
}, 0);

console.log(average);
