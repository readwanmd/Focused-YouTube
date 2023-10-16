let productReview = [
	{
		name: 'Md Readwan',
		ratings: 5,
	},
	{
		name: 'Md Rewan',
		ratings: 4,
	},
	{
		name: 'Md Rsn',
		ratings: 4,
	},
	{
		name: 'Md Rean',
		ratings: 3.5,
	},
	{
		name: 'Md Erduan',
		ratings: 5,
	},
];

const positive = productReview.some((review) => review.ratings >= 4);
console.log(positive);
