import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import { useSignUp } from '../../contexts/AuthContext'


export default function AuthGenderScreen({ navigation }) {

	let { signUpState, setGender } = useSignUp();
	let [ activeInput, setActiveInput ] = useState(2);
	let [ localGender, setLocalGender ] = useState('female');

	useEffect(() => {
		switch(activeInput) {
			case 1:
				setLocalGender('male');
				break;
			case 2:
				setLocalGender('female');
				break;
			case 3:
				setLocalGender('others');
				break;
			default:
				setLocalGender('female');
				break;
		}
	},[activeInput])

	let handleInputChange = (changeTo) => {
		setActiveInput(changeTo);
	}

	let handleContinue = () => {
		setGender(localGender)
		navigation.push('welcome');
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>Хүйсээ сонгоно уу.</Text>
				</View>
				<View style={styles.formContainer} >
					<View style={styles.inputsContainer} >
						<TouchableOpacity
							onPress={() => handleInputChange(1)}
							style={{...styles.inputBtn, borderWidth: activeInput == 1? 1 : 0
							}} >
		
							<Text style={styles.btnText} >
								 ЭРЭГТЭЙ
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleInputChange(2)}
							style={{...styles.inputBtn, borderWidth: activeInput == 2? 1 : 0 }}
						>
							<Text style={styles.btnText} >
								ЭМЭГТЭЙ
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => handleInputChange(3)}
							style={{...styles.inputBtn, borderWidth: activeInput == 3? 1 : 0
							}} >
							<Text style={styles.btnText} >
								БУСАД
							</Text>
						</TouchableOpacity>
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
	
	inputsContainer: {
		height: 150,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 25,
	},
	
	inputBtn: {
		
		width: 300,
		height: 40,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		flexDirection: 'row',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 11.95,

		elevation: 5,
		borderColor: 'red'
	},
	
	btnText: {
		fontWeight: '600'
	},
	
	
	formContainer: {
		justifyContent: 'space-between',
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})
