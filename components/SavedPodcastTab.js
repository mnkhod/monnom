import React, { useState, useEffect } from 'react';
import PodcastCardSaved from '../components/PodcastCardSaved.js';
import { StyleSheet, Text, View, FlatList } from 'react-native'

let data = [
	{
		author: "Ideree's podcast",
		podcastImageSource: require('../assets/podcast-1.png'),
		key: '1' 
	},
	{
		author: 'Битгий сонс подкаст',
		podcastImageSource: require('../assets/podcast-2.png'),
		key: '2' 
	},
	{
		author: 'Бидний нууц подкаст',
		podcastImageSource: require('../assets/podcast-3.png'),
		key: '3' 
	},
	{
		author: 'Битгий сонс подкаст',
		podcastImageSource: require('../assets/podcast-2.png'),
		key: '4' 
	},
	{
		author: 'Бидний нууц подкаст',
		podcastImageSource: require('../assets/podcast-3.png'),
		key: '5' 
	},
	{
		author: 'Битгий сонс подкаст',
		podcastImageSource: require('../assets/podcast-2.png'),
		key: '6' 
	},
	{
		author: 'Бидний нууц подкаст',
		podcastImageSource: require('../assets/podcast-3.png'),
		key: '7' 
	},
]

export default function SavedPodcastTab () {
	let [ podcasts, setPodcasts ] = useState([]);
	useEffect(() => {
		setPodcasts(data);
	},[])

	return (
		<View style={styles.listContainer} >
			<FlatList
				data={podcasts}
				numColumns={4}
				style={styles.flatList}
				showsVerticalScrollIndicator={false}
				renderItem={({item}) => (
					<PodcastCardSaved
						author={item.author}
						podcastImageSource={item.podcastImageSource}
					/>
				)}
			/>
		</View>
	)

}

let styles = StyleSheet.create({
	
	
	listContainer: {
		height: '100%',
		backgroundColor: '#0F191E',
		alignItems: 'center'
	},

	
	flatList: {
		paddingTop: 20,
	},
	
	
	
})
