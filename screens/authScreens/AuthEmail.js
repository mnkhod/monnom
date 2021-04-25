import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import AuthWarning from '../../components/AuthWarning'
import { useSignUp } from '../../contexts/AuthContext'


export default function AuthEmail({ navigation }) {
	let { signUpState, setEmail } = useSignUp();
	let [ localEmail, setLocalEmail ] = useState('');
	let [ showWarning, setShowWarning ] = useState(false);

	let validateEmail = email => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	let handleContinue = () => {
		if (!validateEmail(localEmail)) {
			setShowWarning(true);
		} else {
			setEmail(localEmail)
			navigation.push('authPasswordScreen', { accessingFrom: 'signUp' });
		}
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>Бүртгүүлэх</Text>
				</View>
				<View style={styles.formContainer} >
					<View>
						<AuthInput
							placeholder={'Е-Мэйл'}
							iconpath={require('../../assets/mail.png')}
							type={'email-address'}
							setState={setLocalEmail}
						/>
						<AuthWarning
							warning={'Буруу Е-мэйл байна.'}
							isVisible={showWarning}
						/>
					</View>
					<AuthButton
						onPress={handleContinue}
						text={'Үргэлжлүүлэx'}
					/>
				</View>
						
			</KeyboardAvoidingView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	
	logoText: {
		height: 40,
		resizeMode: 'contain',
	},
	
	formContainer: {
		justifyContent: 'space-between',
		height: 150,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})
