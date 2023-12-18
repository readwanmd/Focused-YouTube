import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const YoutubeForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isDirty, isValid, isSubmitSuccessful },
		reset,
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
			phNumbers: [{ number: '' }],
			age: 0,
			dob: new Date(),
		},
	});

	const onSubmit = (data) => {
		console.log(data);
		console.log(isSubmitSuccessful);
		// isSubmitSuccessful && reset();
	};

	const { fields, append, remove } = useFieldArray({
		name: 'phNumbers',
		control,
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

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

				<div>
					<label htmlFor="">lists of phone numbers</label>
					<div>
						{fields.map((field, i) => {
							return (
								<div className="form-control dynamic-field" key={field.id}>
									<input type="text" {...register(`phNumbers.${i}.number`)} />

									{i > 0 && (
										<button
											type="button"
											className="dynamic-field__remove"
											onClick={() => remove(i)}
										>
											Remove
										</button>
									)}
								</div>
							);
						})}
						<button type="button" onClick={() => append({ number: '' })}>
							Add Phone Number
						</button>
					</div>
				</div>

				<div className="form-control">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						{...register('age', {
							valueAsNumber: true,
							disabled: true,
						})}
					/>
				</div>

				<div className="form-control">
					<label htmlFor="dob">Date of birth</label>
					<input
						type="date"
						id="dob"
						{...register('dob', {
							required: {
								value: true,
								message: 'Date of birth is required',
							},
							valueAsDate: true,
						})}
					/>
					<p className="error-message">{errors.dob?.message}</p>
				</div>

				<button
				// disabled={!isDirty || !isValid}
				>
					Submit
				</button>
			</form>

			<DevTool control={control} />
		</div>
	);
};
export default YoutubeForm;
