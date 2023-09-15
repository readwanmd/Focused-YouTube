const axios = require('axios').default;
/**
async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);

	return users;
}

async function* getPostsByUser(users) {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	for (let i = 0; i < users.length; i++) {
		const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
		yield posts;
	}
}

getUsers()
	.then(async (users) => {
		// const userIterator = await getPostsByUser(users);
		// await userIterator.next();
		// await userIterator.next();
		// console.log((await userIterator.next()).value);

		for await (let v of getPostsByUser(users)) {
			console.log(v.map((d) => d.title));
		}

		console.log(users);
	})
	.catch((err) => {
		console.log(err);
	});

*/

async function getUsers() {
	const url = 'https://jsonplaceholder.typicode.com/users';
	const { data: users } = await axios.get(url);

	return users.map((user) =>
		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
	);
}

// (async () => {
// 	const users = await getUsers();
// 	for (let v of users) {
// 		const { data: posts } = await v;
// 		console.log(posts);
// 	}
// })();

(async () => {
	const users = await getUsers();
	for await (let v of users) {
		console.log(v.data.map((post) => post.title));
	}
})();
