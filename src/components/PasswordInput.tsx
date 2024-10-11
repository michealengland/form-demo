interface PasswordInputProps {
	id: string;
	isRequired?: boolean | false;
	label: string;
	errorMsg?: string;
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean | null;
	placeholder?: string;
	successMsg?: string;
	value: string;
};
// TODO Componentize the success & error message handler.
export function PasswordInput( {
	errorMsg,
	id,
	isRequired,
	isValid,
	label,
	onChange,
	placeholder,
	successMsg,
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
			{ isValid !== null && successMsg && isValid && value.length > 0 && <div className="p-1 text-xs round mt-1 bg-green-300 text-green-900"><p>{ successMsg }</p></div> }
			{ isValid !== null && errorMsg && ! isValid && value.length > 0 && <div className="p-1 text-xs round mt-1 bg-rose-300 text-rose-900"><p>{ errorMsg }</p></div> }
		</label>
	);
}
