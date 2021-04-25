import React, { createContext, useContext, useEffect, useState } from 'react';

let GlobalContext = createContext();

function  GlobalContextProvider({ children }) {
	let [ isAuthed, setIsAuthed ] = useState(true);
	let [ user, setUser ] = useState({
		phoneNumber: '',
		password: '',
		age: '',
	})

	return (
		<GlobalContext.Provider value={{
				isAuthed,
				setIsAuthed,
				user,
				setUser
			}}>
				{children}
		</GlobalContext.Provider>
	)

}

let useGlobalContext = () => {
	let { 
		isAuthed,
		setIsAuthed,
		user,
		setUser
	} = useContext(GlobalContext);

	return {
		isAuthed,
		setIsAuthed,
		user,
		setUser
	}
}

export { GlobalContextProvider, useGlobalContext }
