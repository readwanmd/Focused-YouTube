/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
const data = [
	{
		id: 11011,
		productName: 'Headphone',
		price: 1500,
		stock: 8,
	},
	{
		id: 11012,
		productName: 'Mouse',
		price: 850,
		stock: 5,
	},
	{
		id: 11013,
		productName: 'Keyboard',
		price: 1000,
		stock: 7,
	},
];

const TableRow = ({
	id,
	name,
	price,
	stock,
	quantity,
	total,
	increment,
	decrement,
}) => {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{stock}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td>{total}</td>
			<td>
				<button onClick={() => increment(id)} disabled={stock === quantity}>
					+
				</button>
				<button onClick={() => decrement(id)} disabled={quantity === 0}>
					-
				</button>
			</td>
		</tr>
	);
};

function App() {
	const [products, setProducts] = useState(
		data.map((product) => ({
			...product,
			quantity: 0,
			total: 0,
		}))
	);

	const incrementQuantity = (id) => {
		const newP = products.map((product) => {
			if (product.id === id && product.stock > product.quantity) {
				product.quantity++;
				product.total = product.quantity * product.price;
			}
			return product;
		});
		setProducts(newP);
	};
	const decrementQuantity = (id) => {
		const newP = products.map((product) => {
			if (product.id === id && product.quantity > 0) {
				product.quantity--;
				product.total = product.quantity * product.price;
			}
			return product;
		});
		setProducts(newP);
	};

	const totalAmount = products.reduce((acc, cur) => {
		return acc + cur.total;
	}, 0);

	return (
		<>
			<h1>App</h1>

			<table border="1">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Stock</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<TableRow
							key={product.id}
							{...product}
							increment={incrementQuantity}
							decrement={decrementQuantity}
						/>
					))}
					<tr>
						<td colSpan="5">Total Amount</td>
						<td colSpan="2">{totalAmount} BDT</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;
