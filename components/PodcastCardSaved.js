import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Dimensions,  View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: screenWidth} = Dimensions.get('window');

export default function PodcastCardSaved ({ author, podcastImageSource }) {

	return (
			<TouchableOpacity style={styles.container}>
				<Image style={styles.bookImage} source={podcastImageSource} />
				<Text
					style={styles.author}
					numberOfLines={2}
				>
					{author}
				</Text>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: screenWidth * 0.9 / 4,
		marginBottom: screenWidth * 0.9 * 0.9 * 0.06 
	},
	
	bookImage: {
		borderRadius: 5,
		width: '80%',
		height: screenWidth * 0.9 * 0.8 / 4,
		resizeMode: 'cover',
	},
	
	author: {
		width: '80%',
		color: 'white',
		fontSize: 9,
	},
	
	
	
})
