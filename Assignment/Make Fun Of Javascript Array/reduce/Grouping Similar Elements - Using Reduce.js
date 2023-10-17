const numbers = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
];

const result = numbers.reduce((acc, cur) => {
	let len = cur.length;
	if (acc[len]) {
		acc[len].push(cur);
	} else {
		acc[len] = [cur];
	}
	return acc;
}, {});

console.log(result);
