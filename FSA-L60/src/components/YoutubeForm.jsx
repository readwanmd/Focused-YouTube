import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';

const YoutubeForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
			social: {
				facebook: '',
				twitter: '',
			},
			phone: ['', ''],
		},
	});

	const onSubmit = (data) => console.log(data);

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
							},
						})}
					/>
					<p className="error-message">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						className={`${errors.password?.message ? 'error' : ''}`}
						{...register('password', {
							required: {
								value: true,
								message: 'Password is required',
							},
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters',
							},
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
								message:
									'At least 1 uppercase, 1 lowercase letter and a number',
							},
						})}
					/>
					<p className="error-message">{errors.password?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="facebook">Facebook Username</label>
					<input type="text" id="facebook" {...register('social.facebook')} />
				</div>

				<div className="form-control">
					<label htmlFor="twitter">Twitter Username</label>
					<input type="text" id="twitter" {...register('social.twitter')} />
				</div>

				<div className="form-control">
					<label htmlFor="primary-phone">Phone No</label>
					<input type="text" id="primary-phone" {...register('phone.0')} />
				</div>

				<div className="form-control">
					<label htmlFor="primary-phone">Secondary Phone No</label>
					<input
						type="text"
						id="secondary-phone"
						{...register('phone.1', { valueAsNumber: true })}
					/>
				</div>

				<button>Submit</button>
			</form>

			<DevTool control={control} />
		</div>
	);
};
export default YoutubeForm;
