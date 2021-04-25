import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function AuthWarning ({ warning, isVisible }) {
	
	return (
			<View style={styles.warning} >
				<Text style={{...styles.warningText, display: isVisible? 'flex': 'none'}} >
					{warning}
				</Text>
			</View>
	)

}

let styles = StyleSheet.create({
	warning: {
		marginTop: 10,
		height: 12,
		alignSelf: 'flex-start'
	},
	
	warningText: {
		fontSize: 10,
		fontWeight: '300',
		color: 'red'
	},
})
