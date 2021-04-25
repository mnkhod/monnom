import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TutorialScreen from './TutorialScreenTemplate'

export default function TutorialScreenOne ({ navigation }) {

	let screenState = {
		gradientColor: ['#44025D', '#D87EF9'],
		circle: require('../../assets/cast1.png'),
		logoText: require('../../assets/cast2.png'),
		mainImg: require('../../assets/cast3.png'),
		mainText:'Та хүссэн хүнийхаа хүссэн подкастыг шууд/live-аар сонсох эсвэл тухайн үед татаж авсанаар интернетгүй эвсэл сүлжээгүй аялалд явах гэх мэт тохиолдолд сонсох боломжтой.' ,
		screenNum: 1,
	}

	return (
			<View style={styles.container}>
				<TutorialScreen  screenState={screenState} navigation={navigation} />
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
