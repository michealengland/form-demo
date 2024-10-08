interface PasswordInputProps {
	id: string;
	isRequired?: boolean | false;
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
	isRequired,
	isValid,
	label,
	onChange,
	placeholder,
	value,
}:PasswordInputProps ) {

	return (
		<label htmlFor={ id }>
			{ isRequired ? `${label}*` : label }
			<input
				className="block"
				defaultValue={ value }
				id={ id }
				onChange={ onChange }
				placeholder={ placeholder }
				required={ isRequired }
				type="password"
			/>
			{ errorMsg && ! isValid && value.length > 0 && <div className="error-display"><p>{ errorMsg }</p></div> }
		</label>
	);
}
