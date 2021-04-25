import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import PodcastEpisode from './PodcastEpisode.js';

let episodes = [ 1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8 ];

export default function PodcastEpisodesTab() {

	return (
		<View style={styles.listContainer} >
			<FlatList
				data={episodes}
				renderItem={({item}) => (
					<PodcastEpisode name={item} />
				)}
			/>
		</View>
	)

}

let styles = StyleSheet.create({

	listContainer: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 15,
		width: '100%',
		flex: 1,
		backgroundColor: '#2B2F48',
	},
	
})
