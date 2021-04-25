import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header.js';
import PodcastNavScreen from '../components/PodcastNavScreen.js';
import LibraryNavScreen from '../components/LibraryNavScreen.js';
import LiveNavScreen from '../components/LiveNavScreen.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let HomeTab = createBottomTabNavigator();

const tabOptions = {
	tabBarVisible: false,
};

export default function HomeScreen({ navigation }) {

	return (
		<View style={styles.container} >
			<Header/>
			<HomeTab.Navigator
				screenOptions={tabOptions}
				initialRouteName='libraryStack'
			>
				<HomeTab.Screen  name='libraryStack' component={LibraryNavScreen} />
				<HomeTab.Screen  name='podcastStack' component={PodcastNavScreen} />
				<HomeTab.Screen  name='liveStack' component={LiveNavScreen} />
			</HomeTab.Navigator>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1
	},

})
