import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import AuthWarning from '../../components/AuthWarning';

import { useSignUp } from '../../contexts/AuthContext';

export default function SignUpScreen({ navigation }) {
	let { signUpState, setPhoneNumber } = useSignUp();
	let [ showWarning, setShowWarning ] = useState(false);
	let [ localPhoneNumber, setLocalPhoneNumber ] = useState('');

	let handleSubmit = () => {
		if (localPhoneNumber.length != 8) {
			setShowWarning(true);
		} else {
			setPhoneNumber(localPhoneNumber);
			navigation.push('checkCodeFromPhoneNumber', { accesingFrom: 'signUp' });
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
					<View style={styles.inputContainer}>
						<AuthInput
							placeholder={'Утасны дугаар'}
							iconpath={require('../../assets/phone.png')}
							type={'number-pad'}
							maxLength={8}
							setState={setLocalPhoneNumber}
						/>
						<AuthWarning
							warning={'Утасны дугаар буруу байна.'}
							isVisible={showWarning}
						/>
					</View>
					<AuthButton
						onPress={handleSubmit}
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
		height: 120,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})
