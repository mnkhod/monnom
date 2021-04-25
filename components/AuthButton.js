import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function AuthButton({ onPress, text, disabled }) {

	return (
		<TouchableOpacity 
			style={styles.btn}
			onPress={onPress}
			activeOpacity={disabled ? 1: 0.4}
		>
			<Text style={styles.text} >
				{text}
			</Text>
		</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	btn: {
		width: 300,
		backgroundColor: '#DE5246',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		borderRadius: 25,
	},	
	
	text: {
		fontWeight: '700',
		color: 'white'
	},
	
})
