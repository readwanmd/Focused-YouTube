let nested = [[1, 2], 3, [4, 5], [6, 7], [8, 9]];

let x = nested.reduce((acc, cur) => {
	console.log('prev', acc);
	console.log('current', cur);
	return acc.concat(cur);
}, []);

console.log(x);
