import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import PodcastOtherEpisodes from '../components/PodcastOtherEpisodes.js';
import PodcastAbout from '../components/PodcastAbout.js';
import Comments from '../components/Comments.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PodcastEpisodesTab from '../components/PodcastEpisodesTab';

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const {width: screenWidth} = Dimensions.get('window');

let SinglePodcastTabs = createBottomTabNavigator();
const tabOptions = {
	tabBarVisible: false,
};

let buttons = [
	{
		name: 'episodes',
		text: 'Цувралууд'
	},
	{
		name: 'about',
		text: 'Тухай'
	},
	{
		name: 'comments',
		text: 'Сэтгэгдэл'
	},
]

let PodcastAboutTab = () => {
	return (
		<View style={styles.aboutContainer} >
			<Text style={styles.aboutText} >2019 оноос хойш "Хэрэгтэй юм буу халъя" уриатайгаар YouTube channel дээр подкаст Live stream хийж байгаа бөгөөд одоогоор 67 гаруй цуврал подкастаа гаргасан байгаа. Нэг удаагын подкаст нь ойролцоогоор 70 минут хавьцаа байдаг бөгөөд, маш хэрэгтэй зүйлс ихэнхдээ амжилттай яваа залуучуудаас ярилцлага авдагтай холбоотой тул таньд уйдах цаг байхгүй гэж найдаж байна.</Text>
		</View>
	)
}


export default function SinglePodcastScreen({ navigation }) {
	let [ activeButton, setActiveButton ] = useState('episodes');

	let changeTab = (tabName) => {
		setActiveButton(tabName)
		switch(tabName) {
			case 'episodes':
				navigation.navigate('podcastEpisodes');
				break;
			case 'about':
				navigation.navigate('podcastAbout');
				break;
			case 'comments':
				navigation.navigate('podcastComments');
				break;
		}
	}

	return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
					<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
				</TouchableOpacity>
				<View style={styles.innerContainer} >
					<View style={styles.top} >
						<Image style={styles.podcastImage} source={require('../assets/podcast-1.png')} />
						<View style={styles.podcastDetail} >
							<Text style={styles.name} >Ideree's Podcast</Text>
							<Text style={styles.followers} >17.3k Дагагчтай</Text>
							<TouchableOpacity style={styles.saveButton} onPress={() => console.log('btn')}>
								<MaterialCommunityIcons name={'bookmark-plus'} color={'#DE5246'} size={25} />
								<Text style={styles.buttonText} >Дагах</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.buttonsContainer} >
						{buttons.map((button, index) => (
							<TouchableOpacity
								key={index}
								style={styles.tabButton}
								onPress={() => changeTab(button.name)}
							>
								<Text style={{ ...styles.tabButtonText, color: activeButton == button.name ? 'white' : 'grey' }} >
									{button.text}
								</Text>
								<View style={{
									...styles.buttonBottomLine,
									backgroundColor: activeButton == button.name ? 'white' : 'transparent' }}
								></View>
							</TouchableOpacity>
						))}
					</View>
					<View style={styles.tabNavigator} >
						<SinglePodcastTabs.Navigator
							screenOptions={tabOptions}
							initialRouteName={'podcastEpisodes'}
							sceneContainerStyle={styles.innerTabNavigator} 
						>
							<SinglePodcastTabs.Screen name={'podcastEpisodes'} component={PodcastEpisodesTab} />
							<SinglePodcastTabs.Screen name={'podcastAbout'} component={PodcastAboutTab} />
							<SinglePodcastTabs.Screen name={'podcastComments'} component={Comments} />
						</SinglePodcastTabs.Navigator>
					</View>
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#0F191E',
	},
	
	innerContainer: {
		width: '90%',
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center'
	},
	
	
	top: {
		marginTop: 10,
		width: '100%',
		flexDirection: 'row',
	},
	
	podcastImage: {
		width: screenWidth * 0.4,
		height: screenWidth * 0.4,
		resizeMode: 'cover',
		borderRadius: 5
	},
	
	podcastDetail: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	
	buttonText: {
		color: '#DE5246',
		marginLeft: 10,
		fontWeight: 'bold'
	},
	
	followers: {
		color: '#DE5246',
		marginVertical: 15,
	},
	
	saveButton: {
		flexDirection: 'row',
		paddingHorizontal: '15%',
		borderRadius: 100,
		paddingVertical: '1%',
		alignItems: 'center',
		borderWidth: 3,
		borderColor: '#DE5246',

	},
	
	buttonsContainer: {
		width: '100%',
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	
	tabButton: {
		width: '33%',
		alignItems: 'center'
	},
	
	tabButtonText: {
		color: 'white'
	},
	
	buttonBottomLine: {
		marginTop: 10,
		width: '70%',
		height: 3,
		borderRadius: 5,
	},
	
	innerTabNavigator: {
		backgroundColor: '#0F191E',
	},
	
	tabNavigator: {
		width:'100%',
		flex: 1,
	},
	
	aboutText: {
		color: 'white',
		textAlign: 'justify'
	},
	
	aboutContainer: {
		marginTop: 10,
	},
	
	
	
})
