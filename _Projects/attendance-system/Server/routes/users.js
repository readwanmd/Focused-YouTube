const router = require('express').Router();
const {
	getUsers,
	getUserById,
	postUser,
	deleteUserById,
	patchUserById,
	putUserById,
} = require('../controller/users');

//get all users
router.get('/', getUsers);

// create new user
router.post('/', postUser);

// get user by id
router.get('/:userId', getUserById);

// update user
router.put('/:userId', putUserById);

router.patch('/:userId', patchUserById);

// delete user
router.delete('/:userId', deleteUserById);

module.exports = router;
