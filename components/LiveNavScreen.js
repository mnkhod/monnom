import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

let texts = [
	{
		text: 'haha',
		key: '1'
	},
	{
		text: 'haha',
		key: '2'
	},
	{
		text: 'haha',
		key: '3'
	},
	{
		text: 'haha',
		key: '4'
	},
	{
		text: 'haha',
		key: '5'
	},
	{
		text: 'haha',
		key: '6'
	},
]

export default function LiveNavScreen() {
	let [ data, setData ] = useState(texts);

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer} >
				<Image style={styles.bigCircle} source={require('../assets/ellipse-1.png')} />
				<Image style={styles.smallCircle} source={require('../assets/ellipse-2.png')} />
				<Image style={styles.logo} source={require('../assets/logo.png')} />
			</View>
			<Image style={styles.logoText} source={require('../assets/live2.png')} />
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<View style={styles.list} ><Text>{item.text}</Text></View>
				)}
				pagingEnabled={true}
				style={styles.listContainer} 
			/>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#0F191E',
	},

	bigCircle: {
		width: screenWidth * 0.8,
		height: screenWidth * 0.8,
		borderRadius: 300,
		resizeMode: 'contain',
		position: 'absolute'
	},

	smallCircle: {
		width: screenWidth * 0.65,
		height: screenWidth * 0.65,
		resizeMode: 'contain',
		borderRadius: 300,
		position: 'absolute'
	},
	
	logoContainer: {
		marginTop: 10,
		height: screenWidth * 0.8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	

	logo: {
		width: screenWidth * 0.50,
		height: screenWidth * 0.50
	},

	
	logoText: {
		height: 35,
		marginTop: 10,
		resizeMode: 'contain'
	},
	
	listContainer: {
		backgroundColor: 'red',
		height: 50,
		width: 100,
		flexGrow: 0
	},
	
	list: {
		backgroundColor: 'green',
		paddingVertical:5 
	},
	
	
	
})
