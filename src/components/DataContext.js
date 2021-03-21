import React, { useState, useContext, createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const DataContext = ({ children }) => {
	const location = useLocation();
	const [data, setData] = useState({
		personalData: {},
		step: 0
	})

	useEffect(() => {
		const step = +location.pathname.replace(/\D/g, '')
		setStep(step ? step - 1 : 0)
	}, [location])

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
	console.log(data);
	return (
		<Context.Provider value={{ data, setValues, setStep }}>{children}</Context.Provider>
	)
}

export default DataContext;

export const useData = () => useContext(Context);

