import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './navigationManager';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { AudioPlayerContextProvider } from './contexts/AudioPlayerContext';

import * as RNFS from 'react-native-fs';

export default function App() {
	let path = RNFS.DocumentDirectoryPath + '/test.json';
	let testjson = {name: 'uuganbat'};
	let json = JSON.stringify(testjson);
	RNFS.writeFile(path, testjson)
		.then((success) => {
			console.log('created');
		})
		.catch((err) => {
			console.log(err.message);
		})
	RNFS.readFile(path).then(res => console.log(res));
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
	},

});
