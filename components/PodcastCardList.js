import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,  Text, View, FlatList } from 'react-native'
import PodcastCard from './PodcastCard.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
]

export default function PodcastCardList ({ title, savedPodcast }) {
	let [ podcastList, setPodcastList ] = useState(data);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer} >
				{ savedPodcast ? <MaterialCommunityIcons name="bookmark" color={'white'} size={26} /> : null  }
				<Text style={styles.title} >
					{title}
				</Text>
			</View>
				<FlatList 
					contentContainerStyle={styles.list}
					data={podcastList}
					renderItem={({ item }) => (
						<PodcastCard 
							author={item.author}
							podcastImageSource={item.podcastImageSource}
						/>		
					)} 
					showsHorizontalScrollIndicator={false}
					horizontal
				/>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	
	titleContainer: {
		flexDirection: 'row'
	},
	
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
		marginBottom: 10,
	},
	
})
