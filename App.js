import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import RootStackScreen from './navigationManager';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { AudioPlayerContextProvider } from './contexts/AudioPlayerContext';


export default function App() {
  return (
    <View style={styles.container}>
		<GlobalContextProvider>
			<AudioPlayerContextProvider>
				<NavigationContainer>
					<RootStackScreen />
				</NavigationContainer>
			</AudioPlayerContextProvider>
		</GlobalContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	  width: '100%',
	  height: '100%',
		
	paddingTop: Constants.statusBarHeight,
  },
  
});
