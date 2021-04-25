import React, { createContext, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'

let AuthContext = createContext();

function AuthContextProvider({ children }) {
	
	let [ signUpState, setSignUpState ] = useState({
		phoneNumber: '',
		email: '',
		password: '',
		birthday: {},
		gender: ''
	});
	
	return (
		<AuthContext.Provider value={{ signUpState, setSignUpState }}>
			{children}
		</AuthContext.Provider>
	)

}

function useSignUp() {
	let { signUpState, setSignUpState } = useContext(AuthContext);

	function setPhoneNumber(phoneNumber) {
		setSignUpState(prevState => {
			return {
				...prevState,
				phoneNumber
			}
		})
	}

	function setEmail(email) {
		setSignUpState(prevState => {
			return {
				...prevState,
				email
			}
		})
	}

	function setPassword(password) {
		setSignUpState(prevState => {
			return {
				...prevState,
				password
			}
		})
	}

	function setBirthday(birthday) {
		setSignUpState(prevState => {
			return {
				...prevState,
				birthday
			}
		})
	}

	function setGender(gender) {
		setSignUpState(prevState => {
			return {
				...prevState,
				gender
			}
		})
	}

	return  {
		signUpState,
		setPhoneNumber,
		setEmail,
		setPassword,
		setBirthday,
		setGender
	}
}


export { useSignUp, AuthContextProvider }
