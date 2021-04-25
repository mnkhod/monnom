import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


export default function AuthHeaderWithLogo() {

	return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('../assets/logo.png')} />
				<Image style={styles.logoText} source={require('../assets/logo-text.png')} />
				<Text style={styles.text}>Аудио ном, Дуу хөгжим, Подкаст</Text>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	logo: {
		width: 150,
		height: 150,
	},
	
	logoText: {
		marginVertical: 10,
		width: 150,
		resizeMode: 'contain'
	},
	
	text: {
		fontSize: 10,
		color: 'white'
	},
	
})
