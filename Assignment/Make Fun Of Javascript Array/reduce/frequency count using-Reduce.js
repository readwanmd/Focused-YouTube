const votes = [
	'java',
	'javascript',
	'java',
	'javascript',
	'cpp',
	'javascript',
	'python',
	'javascript',
	'python',
	'javascript',
	'python',
	'python',
	'cpp',
	'python',
	'java',
	'python',
];

const result = votes.reduce((acc, cur) => {
	// console.log(acc);
	if (acc[cur]) {
		acc[cur]++;
	} else {
		acc[cur] = 1;
	}
	return acc;
}, {});

console.log(result);
