const numbers = [1, 31, 11, 3, 78, 514, 98, 10, 15, 29, 47, 59, 93];

function binarySearch(arr, key) {
	let start = 0,
		end = arr.length - 1;
	// console.log(mid);
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === key) return mid;
		if (arr[mid] < key) start = mid + 1;
		if (arr[mid] > key) end = mid - 1;
	}
	return -1;
}

numbers.sort((a, b) => a - b);
console.log(numbers);
let res = binarySearch(numbers, 514);
console.log(res);
console.log(compare(12, 5));
