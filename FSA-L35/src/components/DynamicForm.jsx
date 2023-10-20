import { useState } from 'react';

const formFields = {
	name: {
		type: 'text',
		label: 'enter your name',
		placeholder: 'John Doe',
	},
	email: {
		type: 'email',
		label: 'enter your email',
		placeholder: 'john@example.com',
	},
	phone: {
		type: 'tel',
		label: 'enter your phone no',
		placeholder: '+880 17500 00000',
	},
	password: {
		type: 'password',
		label: 'enter your password',
		placeholder: '********',
	},
	color: {
		type: 'color',
		label: 'select your favorite color',
		placeholder: 'asdf',
	},
	birthDay: {
		type: 'date',
		label: 'select your birthday',
		placeholder: 'asdf',
	},
};

const transformObject = (obj) => {
	return Object.keys(obj).reduce((acc, cur) => {
		acc[cur] = {
			...obj[cur],
			value: '',
		};

		return acc;
	}, {});
};

const mapObjectToArray = (obj) => {
	return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }));
};

// console.log(mapObjectToArray(formFields));

const DynamicForm = () => {
	const [formState, setFormState] = useState(transformObject(formFields));
	const formData = mapObjectToArray(formState);

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = Object.keys(formState).reduce((acc, cur) => {
			acc[cur] = formState[cur].value;

			return acc;
		}, {});

		console.log(values);
	};

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: {
				...formState[e.target.name],
				value: e.target.value,
			},
		});
	};

	return (
		<>
			<h2>Dynamic Form</h2>
			<form onSubmit={handleSubmit}>
				{formData.map((field, index) => (
					<div key={index}>
						<label> {field.label}</label>
						<input
							type={field.type}
							name={field.name}
							placeholder={field.placeholder}
							value={field.value}
							onChange={handleChange}
						/>
					</div>
				))}
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</>
	);
};

export default DynamicForm;
