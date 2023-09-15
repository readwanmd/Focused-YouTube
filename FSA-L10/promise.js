const isResolved = true;
const myPromise = new Promise((resolve, reject) => {
	if (isResolved) {
		resolve('Promise Resolved');
	} else {
		reject('Promise Failed');
	}
});

myPromise
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
