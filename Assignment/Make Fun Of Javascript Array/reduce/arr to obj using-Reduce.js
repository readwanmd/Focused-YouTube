let products = [
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: "You Don't know JS", price: 400 },
	{ name: 'Head First Javascript', price: 200 },
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: 'Head First Javascript', price: 200 },
	{ name: "You Don't know JS", price: 400 },
	{ name: 'Javascript Cookbook', price: 350 },
	{ name: "You Don't know JS", price: 400 },
];

/**
 * expacted output
 * {
 *  Javascript Cookbook: {price: 1050, quantity: 3},
 *  You Don't know JS: {price: 1200, quantity:3}
 *  Head First Javascript: {price: 400, quantity: 2},
 * }
 */

let invoice = products.reduce((acc, cur) => {
	if (acc[cur.name]) {
		acc[cur.name].quantity++;
		acc[cur.name].price += cur.price;
	} else {
		acc[cur.name] = {
			price: cur.price,
			quantity: 1,
		};
	}
	return acc;
}, {});

console.log(invoice);
let price = 0;
for (let key in invoice) {
	price += invoice[key].price;
}

console.log(price);
