import { useStoreState } from 'easy-peasy';

const History = () => {
	const history = useStoreState((state) => state.history);

	return (
		<div>
			{history.items.length > 0 ? (
				<h4>
					Histories:
					<ol>
						{history.items.map((item) => (
							<li key={item.id}>
								{item.action} - {item.count} at {item.time}
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
