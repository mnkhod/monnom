import React, {useEffect} from 'react';

// screens
import SignInScreen from './screens/authScreens/SignInScreen.js';
import RequestResetPasswordScreen from './screens/authScreens/RequestResetPasswordScreen.js';
import SignUpScreen from './screens/authScreens/SignUpScreen.js';
import CheckCodeFromPhoneNumberScreen from './screens/authScreens/CheckCodeFromPhoneNumberScreen.js';
import AuthPhoneNumberScreen from './screens/authScreens/AuthPhoneNumberScreen.js';
import AuthDateScreen from './screens/authScreens/AuthDateScreen.js';
import AuthEmail from './screens/authScreens/AuthEmail.js';
import AuthPasswordScreen from './screens/authScreens/AuthPasswordScreen.js';
import AuthGenderScreen from './screens/authScreens/AuthGenderScreen.js';
import IntroScreen from './screens/noFunctionalityScreens/IntroScreen.js';
import PasswordChangedScreen from './screens/noFunctionalityScreens/PasswordChangedScreen.js';
import TutorialScreenOne from './screens/noFunctionalityScreens/TutorialScreenOne.js';
import TutorialScreenTwo from './screens/noFunctionalityScreens/TutorialScreenTwo.js';
import TutorialScreenThree from './screens/noFunctionalityScreens/TutorialScreenThree.js';
import WelcomeScreen from './screens/noFunctionalityScreens/WelcomeScreen.js';
import SearchScreen from './screens/SearchScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import SinglePodcastScreen from './screens/SinglePodcastScreen.js';
import SingleBookScreen from './screens/SingleBookScreen.js';
import MyLibraryScreen from './screens/MyLibraryScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import PodcastPlayerScreen from './screens/PodcastPlayerScreen.js';
import BookPlayerScreen from './screens/BookPlayerScreen.js';
import BuyBookScreen from './screens/BuyBookScreen.js';
import BuyBookScreenTwo from './screens/BuyBookScreenTwo.js';

// context  providers
import { AuthContextProvider } from './contexts/AuthContext.js';
import { useGlobalContext } from './contexts/GlobalContext'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Constants from 'expo-constants';
import { View, Text, Button } from 'react-native';


let AuthStack = createStackNavigator();
let HomeStack = createStackNavigator();
let SearchStack = createStackNavigator();
let ProfileStack = createStackNavigator();
let MyLibraryStack = createStackNavigator();
let Tabs = createMaterialBottomTabNavigator();
let RootStack = createStackNavigator();

let AuthStackScreen = () => {
	return (
		<AuthContextProvider>
			<AuthStack.Navigator initialRouteName='intro' headerMode='none'>
				<AuthStack.Screen name='intro' component={IntroScreen} />
				<AuthStack.Screen name='tutorialOne' component={TutorialScreenOne} />
				<AuthStack.Screen name='tutorialTwo' component={TutorialScreenTwo} />
				<AuthStack.Screen name='tutorialThree' component={TutorialScreenThree} />
				<AuthStack.Screen name='signIn' component={SignInScreen} />
				<AuthStack.Screen name='signUp' component={SignUpScreen} />
				<AuthStack.Screen name='authEmail' component={AuthEmail} />
				<AuthStack.Screen name='authPasswordScreen' component={AuthPasswordScreen} />
				<AuthStack.Screen name='passwordChangedScreen' component={PasswordChangedScreen} />
				<AuthStack.Screen name='authDateScreen' component={AuthDateScreen} />
				<AuthStack.Screen name='authGenderScreen' component={AuthGenderScreen} />
				<AuthStack.Screen name='checkCodeFromPhoneNumber' component={CheckCodeFromPhoneNumberScreen} />
				<AuthStack.Screen name='requestResetPassword' component={RequestResetPasswordScreen} />
				<AuthStack.Screen name='authPhoneNumber' component={AuthPhoneNumberScreen} />
				<AuthStack.Screen name='welcome' component={WelcomeScreen} />
			</AuthStack.Navigator>
		</AuthContextProvider>
	)
}

let HomeStackScreen = () => {
	return (
		<HomeStack.Navigator headerMode='none'>
			<HomeStack.Screen name='home' component={HomeScreen}  />
		</HomeStack.Navigator>
	)
}

let SearchStackScreen = () => {
	return (
		<SearchStack.Navigator headerMode='none'>
			<SearchStack.Screen name='search' component={SearchScreen} />
		</SearchStack.Navigator>
	)
}

let ProfileStackScreen = () => {
	return (
		<ProfileStack.Navigator headerMode='none'>
			<ProfileStack.Screen name='profile' component={ProfileScreen} />
		</ProfileStack.Navigator>
	)
}

let MyLibraryStackScreen = () => {
	return (
		<MyLibraryStack.Navigator headerMode='none'>
			<MyLibraryStack.Screen name='myLibrary' component={MyLibraryScreen} />
		</MyLibraryStack.Navigator>
	)
}


let TabsScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.navigate('homeTab');
	},[])
	return (
		<Tabs.Navigator
			barStyle={{ backgroundColor: 'black' }}
			activeColor='#DE5246'
		>
			<Tabs.Screen
				name='homeTab'
				component={HomeStackScreen}
				options={{
				  tabBarLabel: 'Нүүр',
				  tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="home" color={color} size={26} />
				  ),
				}}
			/>
			<Tabs.Screen
				name='libraryTab'
				component={MyLibraryStackScreen}
				options={{
				  tabBarLabel: 'Миний сан',
				  tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="bookmark" color={color} size={26} />
				  ),
				}}
			/>
			<Tabs.Screen
				name='profileTab'
				component={ProfileStackScreen}
				options={{
				  tabBarLabel: 'Бүртгэл',
				  tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="account" color={color} size={26} />
				  ),
				}}
			/>
			<Tabs.Screen
				name='searchTab'
				component={SearchStackScreen}
				options={{
				  tabBarLabel: 'Xайx',
				  tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="book-search" color={color} size={26} />
				  ),
				}}
			/>
		</Tabs.Navigator>
	)
}

export default RootStackScreen = ({ navigation }) => {
	let { isAuthed } = useGlobalContext();

	return (
		<RootStack.Navigator initialRouteName='authScreens' headerMode='none' mode='modal'>
			{isAuthed ?
					(
						<>
							<RootStack.Screen name='mainApp' component={TabsScreen} />
							<RootStack.Screen name="singlePodcastScreen" component={SinglePodcastScreen} />
							<RootStack.Screen name="singleBookScreen" component={SingleBookScreen} />
							<RootStack.Screen name="podcastPlayerScreen" component={PodcastPlayerScreen} />
							<RootStack.Screen name="bookPlayerScreen" component={BookPlayerScreen} />
							<RootStack.Screen name="buyBookScreen" component={BuyBookScreen} />
							<RootStack.Screen name="buyBookScreenTwo" component={BuyBookScreenTwo} />
						</>
					) 
					: <RootStack.Screen name='authScreens' component={AuthStackScreen} />
			}
		</RootStack.Navigator>
	)
}


