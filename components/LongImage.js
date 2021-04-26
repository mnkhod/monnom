import React, { useEffect, useRef, Component } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, Platform } from 'react-native'
import { ParallaxImage } from 'react-native-snap-carousel';

const {width: screenWidth} = Dimensions.get('window');

export default class LongImage extends Component {
	constructor(props) {
		super(props)
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<TouchableOpacity style={styles.item} >
				<View style={styles.imgContainer} >
					<Image style={styles.image} source={require('../assets/long-2.png')} />
				</View>
			</TouchableOpacity>
		)
	}

}

let styles = StyleSheet.create({
	item: {
		width: screenWidth * 0.7,
		height: screenWidth * 0.7 * 3/4 ,
		paddingTop: 10,
	},
	
	imgContainer: {
		width: '100%',
		height: '100%',
		shadowColor: '#fff',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.9,
		shadowRadius: 5,  
		elevation: 5 ,
		borderRadius: 10,
	},
	
	image: {
		borderRadius: 10,
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
})
