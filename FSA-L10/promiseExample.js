// function wait(ms) {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms);
// 	});
// 	return promise;
// }

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(1500).then(() => {
// 	console.log('Finished! 1500');
// });
// wait(100).then(() => {
// 	console.log('Finished! 1000');
// });
// wait(5000).then(() => {
// 	console.log('Finished! 5000');
// });

/**
 * 1. Find user by username
 * 2. find posts by userid
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the last commented user
 */

/**
 *  /users?username=[username]
 *  /posts?user_id=[user_id]
 *  /comments?post_id=[post_id]
 *  /users?username=[username]
 */

const get = (url) => Promise.resolve();

get(`/users?username=${readwan}`)
	.then((user) => {
		return get(`/posts?user_id=${user.id}`);
	})
	.then((posts) => {
		const latestPost = posts[0];
		return get(`/comments?post_id=${latestPost.id}`);
	})
	.then((comments) => {
		const latestComment = comments[0];
		return get(`/users?username=${latestComment.username}`);
	})
	.then((user) => {
		console.log(user);
	})
	.catch(() => {
		console.log('error!');
	});
