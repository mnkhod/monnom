import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'

const {width: screenWidth} = Dimensions.get('window');

export default function SpecialCard ({ title }) {

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer} >
				<Text style={styles.title} >
					{title}
				</Text>
			</View>
			<Image style={styles.image} source={require('../assets/best-seller.png')} />
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},

	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
		marginBottom: 10,
	},
	
	image: {
		width: screenWidth * 0.9,
		height: screenWidth * 0.9 * 9/16,
		resizeMode: 'cover',
		borderRadius: 10,
	},
	
})
