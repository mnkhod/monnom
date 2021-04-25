import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function BuyInput ({ title, setState }) {
	
	return (
			<View style={styles.container}>
				<Text style={styles.title} >{title}</Text>
				<TextInput 
					style={styles.input} 
					autoCorrect={false}
					onChangeText={e => setState(e)}
					textContentType='none'
				/>
			</View>
	)

}

let styles = StyleSheet.create({
	
	container: {
		marginBottom: 30,
	},
	
	title: {
		color: 'grey'
	},
	
	input: {
		color: 'white',
		borderBottomWidth: 1,
		borderRadius: 5,
		fontSize: 15,
		borderColor: 'white',
		paddingVertical: 5,
	},
	
	
})
