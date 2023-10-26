import { useState } from 'react';

const CONTACT_FORM_INIT_STATE = {
	name: '',
	email: '',
	group: '',
};

const ContactForm = ({ getContacts }) => {
	const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getContacts(values);
		setValues({ ...CONTACT_FORM_INIT_STATE });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={values.name}
					onChange={handleChange}
				/>
			</div>

			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={values.email}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="group">Group</label>
				<select
					name="group"
					id="group"
					onChange={handleChange}
					value={values.group}
				>
					<option value="">Select</option>
					<option value="Home">Home</option>
					<option value="Office">Office</option>
				</select>
			</div>
			<br />
			<input type="submit" value="Create New Contact" />
		</form>
	);
};

const Table = ({ contacts }) => {
	const [filter, setFilter] = useState('All');
	const [searchTerm, setSearchTerm] = useState('');

	let filteredContacts = [];
	const searchCB = (contact) =>
		contact.name.includes(searchTerm) || contact.email.includes(searchTerm);

	if (filter === 'All') {
		filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
	} else {
		filteredContacts = contacts.filter(
			(contact) => contact.group === filter && searchCB(contact)
		);
	}

	// if (search) {
	// 	filteredContacts = filteredContacts.filter(
	// 		(contact) =>
	// 			contact.name.includes(search) || contact.email.includes(search)
	// 	);
	// }

	return (
		<>
			<div>
				<label htmlFor="filter">Filter Contacts: </label>
				<select
					id="filter"
					onChange={(e) => setFilter(e.target.value)}
					defaultValue={'All'}
				>
					<option value="All">All</option>
					<option value="">None</option>
					<option value="Home">Home</option>
					<option value="Office">Office</option>
				</select>
				<input
					type="text"
					placeholder="Search by Name or Email"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<table className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Group</th>
					</tr>
				</thead>
				<tbody>
					{filteredContacts.map((contact, index) => (
						<tr key={index}>
							<td>{contact.name}</td>
							<td>{contact.phone}</td>
							<td>{contact.email}</td>
							<td>{contact.group}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

const App = () => {
	const [contacts, setContacts] = useState([]);
	const getContacts = (contact) => {
		setContacts([...contacts, contact]);
		// console.log(contacts);
	};
	return (
		<div>
			<h2>Contact App</h2>
			<br />
			<ContactForm getContacts={getContacts} />
			<br />
			<br />
			<Table contacts={contacts} />
		</div>
	);
};
export default App;
