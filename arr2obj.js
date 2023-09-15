const names = [
	'Readwan',
	'Sayam',
	'Sumon',
	'Akash',
	'Abul',
	'Babul',
	'Baten',
	'Elias',
	'Ehsan',
	'Ekhlas',
	'Nafiz',
	'Noushed',
	'Raisul',
	'Rana',
	'Penelope',
	'Paisley',
	'Peyton',
	'Piper',
	'Phoenix',
	'Parker',
	'Zoey',
	'Zoe',
	'Zion',
	'Zachary',
	'Zane',
];

const namedGrouped = names.sort().reduce((acc, cur) => {
	const firstLetter = cur[0].toUpperCase();
	if (firstLetter in acc) {
		acc[firstLetter].push(cur);
	} else {
		acc[firstLetter] = [cur];
	}
	return acc;
}, {});

Object.keys(namedGrouped).forEach((groupKey) => {
	console.log(groupKey);
	console.log('--------------------');
	namedGrouped[groupKey].forEach((value) => {
		console.log(value);
	});
	console.log('');
});
