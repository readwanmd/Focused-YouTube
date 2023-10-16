const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// Horizontal Sum
const hSum = matrix.map((row) => {
	return row.reduce((acc, cur) => acc + cur);
});

console.log(hSum);

// vartical sum
const vSum = matrix.reduce((acc, cur) => {
	return acc.map((value, index) => cur[index] + value);
});

console.log(vSum);

// flat sum
const fSum = matrix.reduce((acc, cur) => {
	return acc + cur.reduce((acc, cur) => acc + cur);
}, 0);

console.log(fSum);
