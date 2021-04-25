import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function WelcomeScreen() {

	return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logoRed} source={require('../../assets/logo-red.png')} />
					<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				</View>
				<View style={styles.bottom} >
					<Image style={styles.welcome} source={require('../../assets/welcome.png')} />
					<Text style={styles.text} >
						Амжилттай бүртгэгдлээ. 
					</Text>
					<Text style={styles.text} >
						Тавтай морил
					</Text>
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},

	
	logoContainer: {
		height: '30%',
		justifyContent: 'flex-start',
		paddingTop: 20,
		alignItems: 'center',
	},
	
	logoRed: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},

	logoText: {
		marginTop: 5,
		height: 20,
		resizeMode: 'contain'
	},
	
	bottom: {
		height: '70%',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	
	welcome: {
		height: '55%',
		resizeMode: 'contain',
		marginBottom: 30,
	},
	
	text: {
		color: 'black',
		fontSize: 25,
	},
	
	
})
