import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';

const YoutubeForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log(errors);

	const onSubmit = (data) => {
		console.log('Form Submit', data);
	};

	return (
		<div>
			<h1>Youtube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className={'form-control'}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						className={`${errors.username?.message ? 'error' : ''}`}
						{...register('username', {
							required: {
								value: true,
								message: 'username is required',
							},
						})}
					/>
					<p className="error-message">{errors.username?.message}</p>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						className={`${errors.email?.message ? 'error' : ''}`}
						{...register('email', {
							required: 'email is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address',
							},
							validate: {
								notAdmin: (fieldValue) => {
									return (
										fieldValue !== 'admin@example.com' ||
										'enter a different email address'
									);
								},
								unacceptedEmail: (fieldValue) => {
									return (
										fieldValue.endsWith('baddomain.com') &&
										'this domain is not acceptable'
									);
								},
							},
						})}
					/>
					<p className="error-message">{errors.email?.message}</p>
				</div>
				<div className="form-control">
					<label htmlFor="channel">Channel</label>

					<input
						type="text"
						id="channel"
						className={`${errors.channel?.message ? 'error' : ''}`}
						{...register('channel', {
							required: {
								value: true,
								message: 'channel is required',
							},
						})}
					/>
					<p className="error-message">{errors.channel?.message}</p>
				</div>

				<button>Submit</button>
			</form>

			<DevTool control={control} />
		</div>
	);
};
export default YoutubeForm;
