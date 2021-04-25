import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BuyInput from '../components/BuyInput';

export default function BuyBookScreen ({ navigation }) {
	let [ city, setCity ] = useState('');
	let [ area, setArea ] = useState('');
	let [ street, setStreet ] = useState('');
	let [ address, setAddress ] = useState('');

	return (
			<ScrollView style={styles.container}>
				<View style={styles.innerContainer} >
					<View style={styles.titleContainer} >
						<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
							<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
						</TouchableOpacity>
						<View style={styles.iconContainer} >
							<MaterialCommunityIcons name={'layers'} color={'#DE5246'} size={25} />
						</View>
						<Text style={styles.title} >Хэвлэмэл ном авах</Text>
					</View>
					<View style={styles.stepContainer} >
						<View style={styles.stepTop} >
							<View style={styles.step} >
								<View style={styles.innerStepOne} ></View>
							</View>
							<View style={styles.line} ></View>
							<View style={styles.step} >
							</View>
						</View>
						<View style={styles.stepBottom} >
							<Text style={styles.stepTextActive} >Хаяг оруулах</Text>
							<Text style={styles.stepText} >Төлбөр төлөлт</Text>
						</View>
					</View>
					<BuyInput
						title={'Хот'}
						setState={setCity}
					/>
					<BuyInput
						title={'Дүүрэг'}
						setState={setArea}
					/>
					<BuyInput
						title={'Гудамж'}
						setState={setStreet}
					/>
					<BuyInput
						title={'Xороо/тоот'}
						setState={setAddress}
					/>
					<TouchableOpacity style={styles.continueButton} onPress={() => navigation.push('buyBookScreenTwo')}>
						<Text style={styles.redText} >
							Үргэлжлүүлэх
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
	)

}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#0F191E',
		paddingTop: 30,
	},
	
	backButton: {
		position: 'absolute',
		right: '90%' 
	},
	
	title: {
		color: '#DE5246',
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
	},
	
	iconContainer: {
		padding: 5,
		borderRadius: 100,
		backgroundColor: '#3f474b',
	},
	
	stepContainer: {
		marginVertical: 30
	},
	
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	continueButton: {
		backgroundColor: 'white',
		alignItems: 'center',
		paddingVertical: 15,
		borderRadius: 5,
		marginTop: 30
	},
	
	redText: {
		color: '#DE5246',
		fontSize: 20,
		fontWeight: 'bold'
	},
	
	stepTop: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	
	stepBottom: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	stepText: {
		color: 'grey'
	},
	
	stepTextActive: {
		color: 'white'
	},
	
	formContainer: {
		height: '70%',
		justifyContent: 'space-evenly'
	},
	
	step: {
		width: 40,
		height: 40,
		backgroundColor: 'white',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	innerStepOne: {
		width: 25,
		height: 25,
		backgroundColor: '#3f474b',
		borderRadius: 50,
	},
	
	line: {
		height: 1,
		flex: 1,
		backgroundColor: 'white'
	},
	
	innerContainer: {
		width: '90%',
		alignSelf: 'center'
	},
	
})
