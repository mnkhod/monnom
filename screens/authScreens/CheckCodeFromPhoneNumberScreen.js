import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import AuthWarning from '../../components/AuthWarning'


export default function CheckCodeFromPhoneNumberScreen({ navigation, route }) {
	let accessedFrom = route.params.accesingFrom;

	let [ showWarning, setShowWarning ] = useState(false);
	let [ inputCode, setInputCode ] = useState();
	let [ disableButton, setDisableButton ] = useState(true);
	let [ counter, setCounter ] = useState(59);

	useEffect(() => {
		 let interval = setInterval(() => {
			setCounter(prevCount => prevCount - 1)
		},1000)

		if (counter == 0) {
			clearInterval(interval);
			setDisableButton(false);
		}
		 
		return () => clearInterval(interval)
	},[counter])

	let handleConfirm = () => {
		if (accessedFrom == 'signIn') {
			navigation.push('authPasswordScreen', { accessingFrom : accessedFrom })
		} else {
			navigation.push('authEmail', { accessingFrom: accessedFrom });
		}
	}

	let handleSendCodeAgain = () => {
		if (!disableButton) {
			setCounter(59)
			setDisableButton(true)
		}
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>
						Таны утсанд мессежээр ирсэн 6 оронтой кодыг оруулна уу!
					</Text>
				</View>
				<View style={styles.formContainer} >
					<View>
						<AuthInput
							placeholder={'Код'}
							iconpath={require('../../assets/privacy.png')}
							setState={setInputCode}
							maxLength={8}
						/>
						<AuthWarning 
							warning={'Баталгаажуулах код буруу байна.'}
							isVisible={showWarning}
						/>
					</View>
					<AuthButton
						onPress={handleConfirm}
						text={'Баталгаажуулах'}
					/>

					<View style={styles.formTitles} >
						<Text style={styles.btnTitle} >
							Код ирэхгүй бол утасны дугаараа шалгаад дахин код авах дээр дарна уу.
						</Text>
						<Text style={styles.counter}>
							00:{counter < 10? '0': null}{counter}
						</Text>
					</View>
					<View style={{ opacity: disableButton? 0.5 : 1 }} >
						<AuthButton
							onPress={handleSendCodeAgain}
							text={'Дахин код авах'}
							disabled={disableButton}
						/>
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
	
	formContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 250,

	},
	
	btnTitle: {
		width: 300,
		textAlign: 'center'
	},
	
	
	counter: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '700'
	},
	
	
	heading: {
		width: 300,
		textAlign: 'center',
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})
