import useFetchData from '../hooks/useFetchData';

const Fetch = () => {
	const {
		data: users,
		dataLoading: usersLoading,
		dataError: usersError,
	} = useFetchData('https://jsonplaceholder.typicode.com/users');
	const {
		data: posts,
		dataLoading: postsLoading,
		dataError: postsError,
	} = useFetchData('https://jsonplaceholder.typicode.com/posts', (data) =>
		data.slice(0, 10)
	);
	const {
		data: comments,
		dataLoading: commentsLoading,
		dataError: commentsError,
	} = useFetchData('https://jsonplaceholder.typicode.com/comments', (data) =>
		data.slice(0, 10).map((item) => ({ id: item.id, name: item.name }))
	);

	// const [posts, setPosts] = useState([]);
	// const [postsLoading, setPostsLoading] = useState(false);
	// const [postsError, setPostsError] = useState('');

	// useEffect(() => {
	// 	fetchPosts();
	// }, []);
	// const fetchPosts = async () => {
	// 	setPostsLoading(true);
	// 	try {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	// 		const data = await res.json();
	// 		setPosts(data);
	// 		setPostsError('');
	// 		setPostsLoading(false);
	// 	} catch (error) {
	// 		setPostsError('server error');
	// 		setPostsLoading(false);
	// 	}
	// };

	return (
		<div
			style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}
		>
			<div>
				<h3>Users</h3>
				<hr />
				{usersLoading && <h3>Loading...</h3>}
				{usersError && <h3>{usersError}</h3>}
				{users &&
					users.map((user) => (
						<ul key={user.id}>
							<li>{user?.name}</li>
						</ul>
					))}
			</div>
			<div>
				<h3>Posts</h3>
				<hr />
				{postsLoading && <h3>Loading...</h3>}
				{postsError && <h3>{postsError}</h3>}
				{posts &&
					posts.map((user) => (
						<ul key={user.id}>
							<li>{user?.title}</li>
						</ul>
					))}
			</div>
			<div>
				<h3>Comments</h3>
				<hr />
				{commentsLoading && <h3>Loading...</h3>}
				{commentsError && <h3>{commentsError}</h3>}
				{comments &&
					comments.map((comment) => (
						<ul key={comment.id}>
							<li>{comment?.name}</li>
						</ul>
					))}
			</div>
		</div>
	);
};
export default Fetch;
