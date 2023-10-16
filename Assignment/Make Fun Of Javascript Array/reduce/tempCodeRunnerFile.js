console.time('map-filter');
let res = bigArray.filter((val) => val % 2 === 0).map((val) => val * 2);
console.timeEnd('map-filter');
console.log(res);