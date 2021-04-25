import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'

export default function FancyAuthHeader () {
	
	return (
			<View style={styles.container}>
				<Image style={styles.fancy1} source={require('../assets/fancy-1.png')} />
				<Image style={styles.fancy2} source={require('../assets/fancy-2.png')} />
				<View style={styles.logoContainer} >
					<Image style={styles.logo} source={require('../assets/logo.png')} />
					<Image style={styles.logoText} source={require('../assets/logo-text.png')} />
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '30%',
	},
	
	
	fancy1: {
		width: 250,
		height: 250,
		resizeMode: 'contain',
		position: 'absolute',
	},
	fancy2: {
		width: 150,
		height: 150,
		resizeMode: 'contain',
		position: 'absolute',
	},
	
	logoContainer: {
		width: 100,
		top: 20,
		position: 'absolute',
		alignItems: 'center'
	},
	
	logoText: {
		height: 20,
		marginTop: 10,
		resizeMode: 'contain',
	},
	
	logo: {
		width: 70,
		height: 70,
		resizeMode: 'contain',
	},
	
	
})
