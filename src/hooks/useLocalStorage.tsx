import { useState } from 'react';

/**
 * Read and edit data from local storage.
 *
 * @param key The name of the field to read.
 * @param initialValue The default value to use if the field is not found.
 * @return A tuple containing the current value and a function to update it.
 */
function useLocalStorage<T>(key: string, initialValue: T) {
	// Read the initial value from local storage.
	const [state, setState] = useState<T>(() => {
		try {
			const storedValue = window.localStorage.getItem(key);
			return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
		} catch (error) {
			console.error("Error accessing localStorage:", error);
			return initialValue;
		}
	});

	// Update the local storage value and the state.
	const setLocalStorageState = (newValue: T) => {
		try {
			setState(newValue);
			window.localStorage.setItem(key, JSON.stringify(newValue));
		} catch (error) {
			console.error("Error setting localStorage:", error);
		}
	};

	return [state, setLocalStorageState] as const;
}

export default useLocalStorage;