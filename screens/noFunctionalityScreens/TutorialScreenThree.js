import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TutorialScreen from './TutorialScreenTemplate'

export default function TutorialScreenOne ({ navigation }) {

	let screenState = {
			gradientColor: ['#5E0081', '#E231A3'],
			circle: require('../../assets/nom1.png'),
			logoText: require('../../assets/nom2.png'),
			mainImg: require('../../assets/nom3.png'),
			mainText:'Манай онлайн номны үйлчилгээ нь ойролцоогоор 1000 гаруй онлайн болон унших хэлбэрээр байдаг бөгөөд та шууд сонсох эсвэл татан авч мөн адил интернетгүй үед уншиж сонсох боломжтой.' ,
			screenNum: 3
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
