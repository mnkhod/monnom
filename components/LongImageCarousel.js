import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	Platform,
} from 'react-native';
import LongImage from './LongImage'

const ENTRIES1 = [
	{
		title: 'Beautiful and dramatic Antelope Canyon',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		illustration: 'https://i.imgur.com/UYiroysl.jpg',
	},
	{
		title: 'Earlier this morning, NYC',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
	},
	{
		title: 'White Pocket Sunset',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
		illustration: 'https://i.imgur.com/MABUbpDl.jpg',
	},
	{
		title: 'Acrocorinth, Greece',
		subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
		illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
	{
		title: 'The lone tree, majestic landscape of New Zealand',
		subtitle: 'Lorem ipsum dolor sit amet',
		illustration: require('../assets/long-1.png'),
	},
];

const {width: screenWidth} = Dimensions.get('window');

export default function LongImageCarousel({ titleColor, title }) {
	const [entries, setEntries] = useState([]);
	const carouselRef = useRef(null);

	useEffect(() => {
		setEntries(ENTRIES1);
	}, []);


	const renderItem = ({item, index}, parallaxProps) => {
		return (
			<LongImage
				parallaxProps={{...parallaxProps}}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<View style={ styles.titleContainer } >
				<Text style={{ ...styles.title, color: titleColor ? titleColor : 'white' }} >
					{title}
				</Text>
			</View>
			<Carousel
				ref={carouselRef}
				sliderWidth={screenWidth}
				sliderHeight={screenWidth * 3/4}
				itemWidth={screenWidth * 0.7}
				data={entries}
				renderItem={renderItem}
				hasParallaxImages={true}
				firstItem={2}
			/>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		height: screenWidth * 0.7 * 3/4 + 30,
		marginLeft: '-5%',
		marginVertical: 10,
	},
	
	titleContainer: {
		width: '95%',
		alignSelf: 'flex-end'
	},
	
	title: {
		fontSize: 20,
		fontWeight: '700'
	},
	
	

});
