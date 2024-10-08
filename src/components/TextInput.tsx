
interface TextInputProps {
	id: string;
	isRequired?: boolean | false;
	label: string;
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value: string;
};

export function TextInput( {
	id,
	isRequired,
	label,
	onChange,
	placeholder,
	value,
}:TextInputProps ) {

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
				type="text"
			/>
		</label>
	);
}
