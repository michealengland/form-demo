import { useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import { PasswordInput } from '../components/PasswordInput';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';

export default function Home() {
	const [username, setUsername] = useLocalStorage<string>('username', '');
	const [password, setPassword] = useLocalStorage<string>('password', '');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	// 1. After the submit is clicked, we validate the field confirmation.
	// 2. Once initially clicked, subsequent validation occurs on change.
	const [isValidated, setIsValidated] = useState<Boolean | null>(null);

	// TODO Abstract this into a function with simple unit test.
	const isPasswordConfirmationValid = (
		password.length > 0 &&
		password === passwordConfirm
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
							setUsername(newUserName.target.value);
						}}
						placeholder="Enter username"
						value={ username }
					/>
					<PasswordInput
						id="password"
						isRequired
						label="Password"
						onChange={(newValue) => {
							setPassword(newValue.target.value);
						}}
						placeholder="Enter password"
						value={ password }
					/>
					<PasswordInput
						errorMsg="Passwords do not match."
						id="passwordConfirm"
						isRequired
						isValid={ isValidated && isPasswordConfirmationValid }
						label="Password Confirm"
						onChange={(newValue) => {
							setPasswordConfirm(newValue.target.value);
						}}
						placeholder="Confirm your password"
						successMsg="Passwords match!"
						value={ passwordConfirm }
					/>
					<Button
						id="submit"

						onClick={(e) => {
							e.preventDefault();

							// TODO Add form submission logic here.
							// 1. Validate the form submission and sanitize the data.
							// 2. Send the data to the server for processing.
							const formSubmissionData = {
								username,
								password,
							}

							console.log(formSubmissionData);

							// Enable validation after first submit.
							setIsValidated(true);
						}}
						text="Submit"
						type="submit"
					/>
				</form>
			</main>
		</div>
	);
}
