interface PasswordInputProps {
	id: string;
	label: string;
	errorMsg?: string;
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean;
	placeholder?: string;
	value: string;
};

export function PasswordInput( {
	errorMsg,
	id,
	isValid,
	label,
	onChange,
	placeholder,
	value,
}:PasswordInputProps ) {

	return (
		<label htmlFor={ id }>
			{ label }
			<input
				className="block"
				defaultValue={ value }
				id={ id }
				onChange={ onChange }
				placeholder={ placeholder }
				type="password"
			/>
			{ errorMsg && ! isValid && <div className="error-display hidden"><p>{ errorMsg }</p></div> }
		</label>
	);
}
