import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

const {width: screenWidth} = Dimensions.get('window');

let buttonsData = [
	{
		iconName: 'podcast',
		buttonText: 'Подкаст',
		navigateTo: 'ownedPodcast'
	},
	{
		iconName: 'book',
		buttonText: 'Ном',
		navigateTo: 'ownedBooks'
	},
	{
		iconName: 'heart',
		buttonText: 'Хадгалсан',
		navigateTo: 'savedBooks'
	},
	{
		iconName: 'pencil',
		buttonText: 'Тэмдэглэл',
		navigateTo: 'savedBooks'
	},
]

export default function MyLibraryHeader () {
	let [ buttons, setbuttons ] = useState([]);
	let navigation = useNavigation();
	let [ activeButton, setActiveButton ] = useState(0);

	let handlePress = (index) => {
		setActiveButton(index);
		switch(index) {
			case 0:
				navigation.navigate('savedPodcastTab');
				break;
			case 1:
				navigation.navigate('savedBooksTab');
				break;
		}
	}

	useEffect(() => {
		setbuttons(buttonsData)
	},[])
	return (
			<View style={styles.container}>
				<View style={styles.innerContainer} >
					{/*<Text style={styles.title}>Миний сан</Text>*/}
					<View style={styles.buttonsContainer} >
						{ buttons.map(( button, index ) => (
							<View key={index} style={styles.singleButtonContainer} >
								<TouchableOpacity style={styles.button} onPress={() => handlePress(index)}>
									<View style={{ ...styles.iconContainer, backgroundColor: activeButton == index ? 'white': '#3f474b' }} >
										<MaterialCommunityIcons name={button.iconName} color={'#DE5246'} size={screenWidth * 0.9 / 12} />
									</View>
									<Text style={{ ...styles.buttonText, color: activeButton == index ? 'white': '#DE5246' }} >
										{button.buttonText}
									</Text>
								</TouchableOpacity>
							</View>
						)) }
					</View>
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		backgroundColor: '#0F191E',
		alignItems: 'center',
		paddingVertical: 25,
	},
	
	innerContainer: {
		width: '90%',
	},
	
	singleButtonContainer: {
		width: screenWidth * 0.9 / 4,
	},
	
	button: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	iconContainer: {
		borderRadius: 1000,
		padding: '12%',
		marginBottom: 10
	},
	
	buttonsContainer: {
		flexDirection: 'row',
	},
	
	
	title: {
		fontSize: 25,
		color: '#DE5246',
	},
	
	buttonText: {
		fontSize: 12
	},
	
	
})
