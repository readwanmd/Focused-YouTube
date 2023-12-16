import { useSelector } from 'react-redux';
const History = () => {
	const history = useSelector((state) => state.history);

	return (
		<div>
			{history.length > 0 ? (
				<h4>
					Histories:
					<ol>
						{history.map((item) => (
							<li key={item.id}>
								{item.action} - {item.time}
							</li>
						))}
					</ol>
				</h4>
			) : (
				<h4>There is no histories yet!</h4>
			)}
		</div>
	);
};
export default History;
