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

async function getUsername(username) {
	try {
		const mainUser = await get(`/users?username=${username}`);
		const posts = await get(`/posts?user_id=${user.id}`);
		const comments = await get(`/comments?post_id=${posts[0].id}`);
		const user = await get(`users?username=${comments[0].username}`);
		console.log(user);
	} catch (err) {
		console.log(err);
	}
}
