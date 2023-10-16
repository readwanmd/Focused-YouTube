let num = [11, 12, 19, 57, 98, 22, 21, 17, 193];

// 1st way
let largest = num[0];
let secondLarge = num[0];
for (var i = 1; i < num.length; i++) {
	if (num[i] > largest) {
		secondLarge = largest;
		largest = num[i];
	}
}

console.log(largest);
console.log(secondLarge);

2nd way
num = num.sort((a, b) => a - b).reverse();
console.log(num[1]);

let highest = -Infinity;
let se condHighest = -Infinity;
// 3rd way
for (let i = 0; i < num.length; i++) {
	highest = Math.max(highest, num[i]);
}

for (let i = 0; i < num.length; i++) {
	if (num[i] < highest) {
		secondHighest = Math.max(secondHighest, num[i]);
	}
}

console.log(highest);
console.log(secondHighest);
