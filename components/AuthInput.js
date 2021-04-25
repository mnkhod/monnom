import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';

export default function AuthInput({ placeholder, iconpath, setState, phoneNumber, hidden, type, maxLength }) {
	let [ hiddenVal, setHiddenVal ] = useState(hidden);

	return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					<Image style={styles.icon} source={iconpath} />
				</View>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder={placeholder}
					keyboardType={type}
					onChangeText={e => setState(e)}
					maxLength={maxLength}
					secureTextEntry={hiddenVal}
					textContentType='none'
				/>
				{
					hidden
						? (<TouchableOpacity style={styles.iconContainer} onPress={() => setHiddenVal(!hiddenVal)}>
								<Image style={styles.icon} source={require('../assets/hidden.png')} />
							</TouchableOpacity>)
						:undefined
				}
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: 300,
		padding: 5,
		borderRadius: 15,
		alignItems: 'center',
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
		paddingLeft: 10,
		width: '80%',
		height: 30 ,
		color: 'black'
	},
	
})
