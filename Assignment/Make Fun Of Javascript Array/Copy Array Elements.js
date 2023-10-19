// shallow copy vs Deep copyz
const arr = [1, 2, 3, 4, 5];
const anotherArr = [1, 2, 3, [4, 5]];

// Shallow copy
const arr1 = arr; //pass by refrence
arr1.push(6);
console.log(arr, arr1);

//using spread operator [shallow copy]
let arr2 = [...anotherArr];
arr2[3].push(6);
console.log(anotherArr, arr2);

// [].map [shallow copy]
const arr3 = arr.map((x) => x);
console.log(arr3);

// [].filter [shallow copy]
const arr4 = arr.filter((x) => true);
console.log(arr4);

// [].slice [shallow copy]
const arr5 = arr.slice();
console.log(arr5);

// [].concat [shallow copy]
const arr6 = arr.concat();
console.log(arr6);

// Array.from() [shallow copy]
const arr7 = Array.from(arr);
console.log(arr7);

// JSON.stringify and JSON.parse [deep copy]
const anotherArrDeepCopy = JSON.parse(JSON.stringify(anotherArr));
anotherArrDeepCopy[3].push(7);
console.log(anotherArr);
console.log(anotherArrDeepCopy);
