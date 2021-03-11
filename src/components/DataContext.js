import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

const DataContext = ({ children }) => {
	const [data, setData] = useState({})

	const setValues = (values) => {
		setData(prevData => {
			return { ...prevData, ...values }
		})
	}

	return (
		<Context.Provider value={{ data, setValues }}>{children}</Context.Provider>
	)
}

export default DataContext;

export const useData = () => useContext(Context);