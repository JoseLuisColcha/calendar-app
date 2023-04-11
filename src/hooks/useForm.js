import { useState } from 'react'

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const reset = () => {
		setValues(initialState)
	}

	const handleInputChange = e => {
		const { value, name } = e.target

		setValues(prevValues => ({
			...prevValues,
			[name]: value,
		}))
	}
	return [values, handleInputChange, reset]
}
