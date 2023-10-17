const products = [
	{
		id: 'P01',
		name: 'Js all you need to know',
		topic: 'javascript',
		price: 2500,
	},
	{
		id: 'P02',
		name: 'Node.js all you need to know',
		topic: 'nodejs',
		price: 2800,
	},
	{
		id: 'P03',
		name: 'C all you need to know',
		topic: 'c',
		price: 1500,
	},
	{
		id: 'P04',
		name: 'JS make fun of array',
		topic: 'js array',
		price: 1200,
	},
	{
		id: 'P05',
		name: 'React under the hood',
		topic: 'reactjs',
		price: 3500,
	},
];

const discountPrice = {
	P01: 2099,
	P02: 2500,
	P03: 1200,
	P04: 999,
	// P05: 2999,
};

const updateedProducts = products.reduce((acc, product) => {
	if (discountPrice[product.id]) {
		product.discountPrice = discountPrice[product.id];
	} else {
		product.discountPrice = 0;
	}
	acc.push(product);
	return acc;
}, []);

console.log(updateedProducts);
