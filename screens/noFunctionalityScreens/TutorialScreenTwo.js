import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TutorialScreen from './TutorialScreenTemplate'

export default function TutorialScreenTwo ({ navigation }) {

	let screenState = {
			gradientColor: ['#5E0081', '#6EC9EC'],
			circle: require('../../assets/live1.png'),
			logoText: require('../../assets/live2.png'),
			mainImg: require('../../assets/live3.png'),
			mainText:'Та дуу сонсох, дуу хөгжим болон уран бүтээлчдээр ангилан дуу сонсох боломжтой ба тухайн үед татан авсанаар дараа нь интернетгүй үед сонсох боломжтой.' ,
		screenNum: 2
	}
	return (
			<View style={styles.container}>
				<TutorialScreen screenState={screenState} navigation={navigation} />
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
