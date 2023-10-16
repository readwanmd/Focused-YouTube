const numbers = [1, 2, 3, 4, 5];

//mapped
const mapped = numbers.reduce((acc, cur) => {
	acc.push(cur * cur);
	return acc;
}, []);
// console.log(mapped);

// filter
const odds = numbers.reduce((acc, cur) => {
	if (cur % 2 === 1) {
		acc.push(cur);
	}
	return acc;
}, []);
// console.log(odds);

//generate big array
let bigArray = [];
for (let i = 0; i < 5000000; i++) {
	bigArray.push(i);
}

//big array map-filter chain
console.time('map-filter');
let res = bigArray.filter((val) => val % 2 === 0).map((val) => val * 2);
console.timeEnd('map-filter');
// console.log(res);

//big array map-filter reduce
console.time('map-filter-reduce');
let reduced = bigArray.reduce((acc, cur) => {
	if (cur % 2 === 0) {
		acc.push(cur * 2);
	}
	return acc;
}, []);
console.timeEnd('map-filter-reduce');
