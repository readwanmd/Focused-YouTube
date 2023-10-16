const stusentArray = [
	{
		id: 1,
		name: 'Readwan',
		cgpa: 2.2,
		email: 'readwan@gmail.com',
		due: false,
		dueAmount: 0,
	},
	{
		id: 2,
		name: 'Sayam',
		cgpa: 2.98,
		email: 'sayam@gmail.com',
		due: true,
		dueAmount: 3500,
	},
	{
		id: 3,
		name: 'Salaman',
		cgpa: 3.38,
		email: 'salman@gmail.com',
		due: false,
		dueAmount: 0,
	},
	{
		id: 4,
		name: 'Sumon',
		cgpa: 3.05,
		email: 'sumon@gmail.com',
		due: true,
		dueAmount: 8000,
	},
	{
		id: 5,
		name: 'Fahim',
		cgpa: 3.02,
		email: 'fahim@gmail.com',
		due: true,
		dueAmount: 5000,
	},
];

let lowCG = stusentArray.filter((value) => value.cgpa < 3);
let dueStudent = stusentArray.filter((value) => value.due);

const emailTemplate = stusentArray
	.filter((value) => value.cgpa < 3)
	.map((value) => {
		return {
			email: value.email,
			sub: `${value.name}, your result has been published`,
			msg: `Your result has been published and You Failed with CGPA-${value.cgpa}}`,
		};
	});

console.log(emailTemplate);
