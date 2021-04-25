import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Header from '../components/Header.js';
import BookCard from '../components/BookCard.js';
import MyLibraryHeader from '../components/MyLibraryHeader.js';
import SavedPodcastTab from '../components/SavedPodcastTab.js';
import SavedBooksTab from '../components/SavedBooksTab.js';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

let MyLibraryTabs = createBottomTabNavigator();

const tabOptions = {
	tabBarVisible: false,
};

export default function MyLibraryScreen() {
	return (
		<View style={styles.container}>
			<MyLibraryHeader />
			<MyLibraryTabs.Navigator
				screenOptions={tabOptions}
				initialRouteName='savedPodcastTab'
			>
				<MyLibraryTabs.Screen  name='savedPodcastTab' component={SavedPodcastTab} />
				<MyLibraryTabs.Screen  name='savedBooksTab' component={SavedBooksTab} />
			</MyLibraryTabs.Navigator>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		height: '100%',
		backgroundColor: '#0F191E',
	}
})
