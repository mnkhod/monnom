import React, { useEffect, useRef, Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform } from 'react-native'
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
			<TouchableOpacity
				style={styles.item}
			>
				<ParallaxImage
					source={require('../assets/long-1.png')}
					style={styles.image}
					containerStyle={styles.imageContainer}
					parallaxFactor={0.4}
					{...this.props.parallaxProps}
				/>
			</TouchableOpacity>
		)
	}

}

let styles = StyleSheet.create({
	item: {
		width: screenWidth * 0.7,
		height: screenWidth * 0.7 * 3/4 ,
		paddingTop: 10,

		shadowColor: '#fff',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.9,
		shadowRadius: 5,  
		elevation: 5 
	},
	imageContainer: {
		flex: 1,
		borderRadius: 8,
		maxWidth: 300,
		marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
		backgroundColor: 'white',
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
})
