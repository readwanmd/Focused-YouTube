function main() {
	setTimeout(() => {
		console.log('Last');
	}, 10);

	setTimeout(() => {
		console.log('first');
	}, 0);

	test();
}

function test() {
	console.log('Test');
}

main();
