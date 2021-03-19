import React, { useState, useContext, createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
export const Context = createContext();

const DataContext = ({ children }) => {
	const history = useHistory();
	const [data, setData] = useState({
		personalData: {},
		step: 0
	})

	useEffect(() => {
		if (data.step > 0) {
			history.push(`/step${data.step + 1}`)
		} else {
			history.push(`/`)
		}
	}, [history, data.step])

	const setValues = (values) => {
		setData(prevData => {
			return { ...prevData, personalData: { ...data.personalData, ...values } }
		})
	}
	const setStep = (value) => {
		setData(prevData => {
			return { ...prevData, step: value }
		})
	}

	return (
		<Context.Provider value={{ data, setValues, setStep }}>{children}</Context.Provider>
	)
}

export default DataContext;

export const useData = () => useContext(Context);

