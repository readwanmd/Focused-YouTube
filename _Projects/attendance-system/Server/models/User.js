const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 18,
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: function (v) {
				const isEmailValidRegex =
					/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				return isEmailValidRegex.test(v);
			},
			message: (props) => `invalid email: ${props.value}`,
		},
	},
	password: {
		type: String,
		minLength: [6, 'password is too short'],
		required: true,
	},
	roles: {
		type: [String],
		required: true,
		default: ['STUDENT'],
	},
	accountStatus: {
		type: String,
		enum: ['PENDING', 'ACTIVE', 'REJECTED'],
		default: 'PENDING',
		required: true,
	},
});

const User = model('User', userSchema);
module.exports = User;
