import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function DatePicker({ setState }) {

	return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					<Image style={styles.icon} source={require('../assets/birth.png')} />
				</View>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder={'2000'}
					placeholderTextColor={'rgba(255,255,255,0.4)'}
					textAlign='center'
					keyboardType='number-pad'
					maxLength={4}
					onChangeText={e => {
						setState(prev => ({
							...prev,
							year: e
						}))
					}}
				/>
				<View style={styles.line} ></View>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder={'03'}
					placeholderTextColor={'rgba(255,255,255,0.4)'}
					textAlign='center'
					keyboardType='number-pad'
					maxLength={2}
					onChangeText={e => {
						setState(prev => ({
							...prev,
							month: e
						}))
					}}
				/>
				<View style={styles.line} ></View>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder={'10'}
					placeholderTextColor={'rgba(255,255,255,0.4)'}
					textAlign='center'
					keyboardType='number-pad'
					maxLength={2}
					onChangeText={e => {
						setState(prev => ({
							...prev,
							day: e
						}))
					}}
				/>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: 300,
		padding: 5,
		borderRadius: 4,
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.3)',
		flexDirection: 'row',
		marginVertical:  8
	},
	
	line: {
		backgroundColor: 'white',
		height: 20,
		width: 1
	},
	
	iconContainer: {
		width: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30
	},
	
	icon: {
		height: 20,
		width: 20,
		resizeMode: 'contain'
	},
	
	input: {
		width: '30%',
		height: 30 ,
		color: 'white',
	},
})
