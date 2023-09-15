// //Pure function
// function sum(a, b) {
// 	return a + b;
// }

// sum(10, 20); //30

// //Side effect
// let limit = 10;
// function changeLimit() {
// 	limit = 500;
// }

// changeLimit(limit); //100
// console.log(limit);

const arr = [1, 2, 3];
function add(arr, data) {
	arr.push(data);
}

add(arr, 9);
console.log(arr);
