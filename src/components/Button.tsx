
import { ButtonHTMLAttributes } from 'react';
interface ButtonProps {
	id: string;
	onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
	text: string;
	type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

export function Button( {
	id,
	onClick,
	text,
	type,
}:ButtonProps ) {

	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			id={ id }
			onClick={ onClick }
			type={ type }
		>
			{ text }
		</button>
	);
}
