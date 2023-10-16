const arr = [1, 2, 3, 4, 5, 6, 7];

//map
const maped = arr.map((v) => [v * 2]).flat();
console.log(maped);

//flatMap
const flatMap = arr.flatMap((v) => [v, v * 2]);
console.log(flatMap);

//using reduce
const reducedFlatMap = arr.reduce((acc, cur) => {
	return acc.concat(cur * 2);
}, []);
console.log(reducedFlatMap);

const reducedFlatMap1 = arr.reduce((acc, cur) => {
	return acc.concat([cur, cur * 2]);
}, []);
console.log(reducedFlatMap1);
