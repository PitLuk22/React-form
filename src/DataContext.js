import React, { useState, useContext, createContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export const Context = createContext();

const availablePaths = ['/', '/step2', '/step3', '/step4', '/step5'];

const DataContext = ({ children }) => {
	const location = useLocation();
	const history = useHistory();
	const [data, setData] = useState({
		personalData: {},
		step: 0,
		isSuccess: false,
	})

	// Steps need for Nav component
	useEffect(() => {
		if (!availablePaths.includes(location.pathname)) {
			setStep(0)
			history.push('/')
		} else {
			const step = +location.pathname.replace(/\D/g, '')
			setStep(step ? step - 1 : 0)
		}
	}, [location, history])

	useEffect(() => {
		if (localStorage.getItem('data')) {
			setValues(JSON.parse(localStorage.getItem('data')))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const setValues = (values) => {
		setData(prevData => {
			return { ...prevData, personalData: { ...data.personalData, ...values } }
		})

		if (!values.hasOwnProperty('files')) {
			const prevLocalValues = JSON.parse(localStorage.getItem('data')) || {};
			localStorage.setItem('data', JSON.stringify({ ...prevLocalValues, ...values }))
		}
	}

	const delValues = () => {
		setData(prevData => {
			return { ...prevData, personalData: {} }
		})
		localStorage.removeItem('data')
	}
	const setStep = (value) => {
		setData(prevData => {
			return { ...prevData, step: value }
		})
	}
	const setSuccess = (boolean) => {
		setData(prevData => {
			return { ...prevData, isSuccess: boolean }
		})
	}
	return (
		<Context.Provider value={{ data, setValues, setStep, delValues, setSuccess }}>{children}</Context.Provider>
	)
}

export default DataContext;

export const useData = () => useContext(Context);

