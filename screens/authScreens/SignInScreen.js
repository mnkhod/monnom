import React, { useState, useEffect } from 'react';
import { StyleSheet, Image,  KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import AuthWarning from '../../components/AuthWarning';
import { useGlobalContext } from '../../contexts/GlobalContext'


export default function SignInScreen({ navigation }) {
	let { setIsAuthed } = useGlobalContext();
	let [ showWarning, setShowWarning ] = useState(false);
	let [ phoneNumber, setPhoneNumber ] = useState('');
	let [ password, setPassword ] = useState('');

	let handleSignIn = () => {
		setIsAuthed(true);
	}

	let handleForgetPassword = () => {
		navigation.push('requestResetPassword');
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<View>
					<Text style={styles.heading}>НЭВТРЭХ</Text>
				</View>
				<View style={styles.formContainer} >
					<AuthInput
						placeholder={'Утасны дугаар'}
						iconpath={require('../../assets/phone.png')}
						type={'number-pad'}
						maxLength={8}
						setState={setPhoneNumber}
					/>
					<View>
						<AuthInput
							placeholder={'Нууц үг'}
							iconpath={require('../../assets/privacy.png')}
							maxLength={8}
							hidden={true}
							setState={setPassword}
						/>
						<AuthWarning
							warning={'Утасны дугаар буруу байна.'}
							isVisible={showWarning}
						/>
					</View>
					<TouchableOpacity style={styles.forgetPassword} onPress={handleForgetPassword}>
						<Text style={styles.forgetPasswordText} >
							Нууц үг сэргээx?
						</Text>
					</TouchableOpacity>
					<AuthButton
						onPress={handleSignIn}
						text={'Нэвтрэх'}
					/>
					<View style={styles.socialButtonsContainer} >
						<TouchableOpacity style={[styles.socialButton, styles.facebook]} onPress={() => console.log('btn')}>
							<Image style={styles.socialLogo} source={require('../../assets/facebook.png')} />
							<Text style={styles.socialText} >
								Facebook
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.socialButton, styles.google]} onPress={() => console.log('btn')}>
							<Image style={styles.socialLogo} source={require('../../assets/google.png')} />
							<Text style={styles.socialText} >
								Google
							</Text>
						</TouchableOpacity>
					</View>
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
	
	forgetPassword: {
		alignSelf: 'flex-end',
	},
	
	forgetPasswordText: {
		color: 'rgba(0,0,255,0.8)'
	},
	
	socialText: {
		color: 'white'
	},
	
	
	socialButtonsContainer: {
		width: 300,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},

	socialLogo: {
		width: 18,
		resizeMode: 'contain',
		marginRight: 10
	},
	
	socialButton: {
		width: '46%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		flexDirection: 'row'
	},
	
	facebook: {
		backgroundColor: '#4267B2'
	},
	
	google: {
		backgroundColor: '#DB4437'
	},
	
	
	formContainer: {
		justifyContent: 'space-between',
		height: 270,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '700'
	},
	
})
