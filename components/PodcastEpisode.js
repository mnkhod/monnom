import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function PodcastEpisode ({ name }) {
	let navigation = useNavigation();
	
	let playPodcast = () => {
		navigation.push('podcastPlayerScreen')
	}

	return (
		<View style={styles.episodeContainer} >
			<Image style={styles.episodeImage} source={require('../assets/podcast-1.png')} />
			<View style={styles.episodeNameContainer} >
				<Text 
					style={styles.episodeName}
					numberOfLines={1}
				>
					Ideree’s podcast 66: Lodoisambuu, Ulaanbal
				</Text>
				<Text style={styles.time} >2:13:45</Text>
			</View>
			<TouchableOpacity style={styles.downloadIcon} onPress={playPodcast} >
				<MaterialCommunityIcons name={'download'} color={'#DE5246'} size={25} />
			</TouchableOpacity>
		</View>
	)
}

let styles = StyleSheet.create({

	episodeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: 'grey'
	},
	
	episodeNameContainer: {
		width: '65%',
	},
	
	episodeName: {
		color: 'white'
	},
	
	time: {
		color: 'grey'
	},
	
	episodeImage: {
		width: 50,
		height: 50,
		marginVertical: 10,
		resizeMode: 'cover',
		borderRadius: 5
	},
	
	downloadIcon: {
		padding: 10,
	},
})
