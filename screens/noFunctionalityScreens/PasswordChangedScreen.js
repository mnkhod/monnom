import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';


export default function PasswordChangedScreen({ navigation }) {

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View style={styles.formContainer} >
				<View style={styles.textContainer} >
					<Text style={styles.text}>Нууц үг амжилттай шинэчлэгдлээ.</Text>
				</View>
					<AuthButton
						text={'Эхлэx'}
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
		height: '70%',
		justifyContent: 'space-between',
	},
	
	textContainer: {
		width: 300,
		alignItems: 'center'
	},
	
	formContainer: {
		justifyContent: 'space-evenly',
		height: 400,
	},
	
	
})
