import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalStyle } from '../Style';

import { useNavigation } from '@react-navigation/native';

export default function BookCard({ author, bookName, bookImageSource }) {
	let [ icon, setIcon ] = useState('bookmark-plus');
	let navigation = useNavigation();

	let handleSaveBook = () => {
		if (icon == 'bookmark-plus') {
			setIcon('bookmark-minus')
		} else {
			setIcon('bookmark-plus')
		}
	}

	let openSingleBook = () => {
		navigation.push('singleBookScreen');
	}

	return (
			<TouchableOpacity style={styles.container} onPress={openSingleBook}>
				<Image style={styles.bookImage} source={bookImageSource} />
				<Text style={globalStyle.mainTextRed} >
					{bookName}
				</Text>
				<Text style={styles.authorText} >
					{author}
				</Text>
				<TouchableOpacity style={styles.iconContainer} onPress={handleSaveBook}>
					<MaterialCommunityIcons name={icon} color={'#DE5246'} size={36} />
				</TouchableOpacity>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginRight: 20,
		width: 150,
	},
	
	bookImage: {
		width: '100%',
		borderRadius: 5,
		height: 150 * 9/6,
		resizeMode: 'cover',
	},

	bookNameText: {
		width: '100%',
		color: 'white',
		fontSize: 18 
	},
	
	authorText: {
		color: '#D2D2D2'
	},
	
	iconContainer: {
		position: 'absolute',
		right: 0,
		top: 175,
		padding: 6,
	},
	
	
	
})
