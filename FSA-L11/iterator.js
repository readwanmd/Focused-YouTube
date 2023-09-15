// const channel = 'Stack';

// const channelIterator = channel[Symbol.iterator]();

// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());

// for (let c of channel) {
// 	console.log(c);
// }

//our custom iterator object
const range = {
	start: 0,
	stop: 100,
	step: 5,
};

range[Symbol.iterator] = function (c) {
	let current = this.start;
	let stop = this.stop;
	let step = this.step;

	return {
		next() {
			const o = {
				value: current,
				done: current > stop,
			};
			current += step;

			return o;
		},
	};
};

for (let v of range) {
	console.log(v);
}

// const rangeiterator = range[Symbol.iterator]();
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
// console.log(rangeiterator.next());
