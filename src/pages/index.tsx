import { useState } from 'react';

import { PasswordInput } from '../components/PasswordInput';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';

export default function Home() {
	const [formSubmission, setFormSubmission] = useState({
		username: '',
		password: '',
		passwordConfirm: '',
	});

	// TODO Abstract this into a function with simple unit test.
	const isPasswordConfirmationValid = (
		formSubmission.password.length > 0 &&
		formSubmission.password === formSubmission.passwordConfirm
	);

	return (
		<div className="font-sans flex justify-center items-center min-h-screen">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-2xl">Form Demo</h1>
				<form className="grid gap-4 bg-slate-50 p-5 text-slate-900" method="post">
					<TextInput
						id="username"
						isRequired
						label="Username"
						onChange={(newUserName) => {
							setFormSubmission({
								...formSubmission,
								username: newUserName.target.value,
							});
						}}
						placeholder="Enter username"
						value={ formSubmission.username }
					/>
					<PasswordInput
						id="password"
						isRequired
						label="Password"
						onChange={(newValue) => {
							setFormSubmission({
								...formSubmission,
								password: newValue.target.value,
							});
						}}
						placeholder="Enter password"
						value={ formSubmission.password }
					/>
					<PasswordInput
						errorMsg="Passwords do not match."
						id="passwordConfirm"
						isRequired
						isValid={
							isPasswordConfirmationValid
						}
						label="Password Confirm"
						onChange={(newValue) => {
							setFormSubmission({
								...formSubmission,
								passwordConfirm: newValue.target.value,
							});
						}}
						placeholder="Confirm your password"
						successMsg="Passwords match!"
						value={ formSubmission.passwordConfirm }
					/>
					<Button
						id="submit"
						onClick={(e) => {
							e.preventDefault();
							// TODO Add form submission logic here.
							// 1. Validate the form submission and sanitize the data.
							// 2. Send the data to the server for processing.
							console.log(formSubmission);
						}}
						text="Submit"
						type="submit"
					/>
				</form>
			</main>
		</div>
	);
}
