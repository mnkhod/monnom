import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import AuthWarning from '../../components/AuthWarning'
import { useSignUp } from '../../contexts/AuthContext'

export default function AuthPasswordScreen({ navigation, route }) {
	let { signUpState, setPassword } = useSignUp();
	let [ localPassword, setLocalPassword ] = useState('');
	let [ validationPassword, setValidationPassword ] = useState('');
	let [ showWarning, setShowWarning ] = useState(false);

	let accessedFrom = route.params.accessingFrom;
	let handleContinue = () => {
		if (localPassword == '' || localPassword !== validationPassword ) {
			setShowWarning(true)
		} else if ( accessedFrom == 'signUp' ) {
			navigation.push('authDateScreen');
			setPassword(localPassword);
		} else {
			navigation.push('passwordChangedScreen');
		}
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>{accessedFrom == 'signUp' ? 'Бүртгүүлэх': 'Нууц үг шинэчлэx'}</Text>
				</View>
				<View style={styles.formContainer} >
					<View style={styles.inputsContainer} >
						<AuthInput
							placeholder={'Нууц үг'}
							iconpath={require('../../assets/privacy.png')}
							maxLength={8}
							hidden={true}
							setState={setLocalPassword}
						/>
						<View>
							<AuthInput
								placeholder={'Нууц үг давтах'}
								iconpath={require('../../assets/privacy.png')}
								maxLength={8}
								hidden={true}
								setState={setValidationPassword}
							/>
							<AuthWarning 
								warning={'Таны оруулсан нууц үг таарахгүй байна.'}
								isVisible={showWarning}
							/>
						</View>
					</View>

					<AuthButton
						onPress={handleContinue}
						text={accessedFrom == 'signUp' ? 'Бүртгүүлэх': 'Нууц үг шинэчлэx'}
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
	
	warning: {
		height: 12,
		alignSelf: 'flex-start'
	},
	
	warningText: {
		fontSize: 10,
		fontWeight: '300',
		color: 'red'
	},
	inputsContainer: {
		height: '60%',
		justifyContent: 'space-between',
	},
	
	formContainer: {
		justifyContent: 'space-evenly',
		height: 200,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})
