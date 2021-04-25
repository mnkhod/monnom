import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: screenWidth} = Dimensions.get('window');

export default function BookCard({ bookName, bookImageSource }) {

	return (
			<TouchableOpacity style={styles.container}>
				<Image style={styles.bookImage} source={bookImageSource} />
				<Text
					style={styles.bookNameText}
					numberOfLines={1}
				>
					{bookName}
				</Text>
				<View style={styles.iconsContainer} >
						<MaterialCommunityIcons name={'music-note'} color={'#DE5246'} size={screenWidth / 25} />
						<MaterialCommunityIcons name={'eye'} color={'#DE5246'} size={screenWidth / 25} />
						<MaterialCommunityIcons name={'layers'} color={'#DE5246'} size={screenWidth / 25} />
				</View>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: screenWidth * 0.9 /4,
		marginBottom: screenWidth * 0.9 * 0.9 * 0.06 
	},
	
	bookImage: {
		borderRadius: 5,
		width: '80%',
		height: screenWidth * 0.9 * 0.8 * 9/6 /4,
		resizeMode: 'cover',
	},

	bookNameText: {
		width: '80%',
		color: 'white',
		fontSize: 9 
	},
	
	authorText: {
		color: '#D2D2D2'
	},
	
	iconsContainer: {
		marginTop: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%'
	},

	
	
})
