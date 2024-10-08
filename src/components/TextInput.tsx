
interface TextInputProps {
	id: string;
	label: string;
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	value: string;
};

export function TextInput( {
	id,
	label,
	onChange,
	placeholder,
	value,
}:TextInputProps ) {

	return (
		<label htmlFor={ id }>
			{ label }
			<input
				className="block"
				defaultValue={ value }
				id={ id }
				onChange={ onChange }
				placeholder={ placeholder }
				type="text"
			/>
		</label>
	);
}
