import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BuyInput from '../components/BuyInput';
let {width: screenWidth} = Dimensions.get('window');

export default function BuyBookScreen ({ navigation }) {

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
							<View style={styles.step} ></View>
							<View style={styles.line} ></View>
							<View style={styles.step} >
								<View style={styles.innerStepOne} ></View>
							</View>
						</View>
						<View style={styles.stepBottom} >
							<Text style={styles.stepText} >Хаяг оруулах</Text>
							<Text style={styles.stepTextActive} >Төлбөр төлөлт</Text>
						</View>
					</View>
					<View style={styles.main} >
						<View style={styles.addressContainer} >
							<View style={styles.innerAddress} >
								<Text style={styles.addressTitle} >Хүргүүлэх хаяг</Text>
								<View style={styles.checkIconContainer} >
									<MaterialCommunityIcons name={'check'} color={'#DE5246'} size={15} />
								</View>
							</View>
							<Text style={styles.address} >
								Ulaanbaatar, 13р хороолол, 10р хороо 52р байр 98 тоот
							</Text>
							<View style={styles.contentContainer} >
								<Image style={styles.contentImage} source={require('../assets/book-1.png')} />
								<View style={styles.contentDetails} >
									<View style={styles.detail} >
										<Text style={styles.detailTitle} >Нэр:</Text>
										<Text style={styles.detailText}>Ногоон нүдэн лам</Text>
									</View>
									<View style={styles.detail} >
										<Text style={styles.detailTitle} >Зохиогч:</Text>
										<Text style={styles.detailText}>Ц. Оюунгэрэл</Text>
									</View>
									<View style={styles.detail} >
										<Text style={styles.detailTitle} >Үнэ:</Text>
										<Text style={styles.detailText}>17'900₮</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<TouchableOpacity style={styles.continueButton} onPress={() => navigation.push('buyBookScreenTwo')}>
						<Text style={styles.redText} >
							Худалдан авах
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
	
	checkIconContainer: {
		padding: 5,
		borderRadius: 100,
		backgroundColor: 'white',
	},
	
	address: {
		color: 'white',
		width: '80%'
	},
	
	addressTitle: {
		color: 'white'
	},
	
	innerAddress: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginBottom: 15
	},
	
	contentContainer: {
		flexDirection: 'row',
		paddingVertical: 30
	},
	
	contentDetails: {
		paddingHorizontal: 15,
	},
	
	detail: {
		marginBottom: 15
	},
	
	detailTitle: {
		color: '#DE5246',
	},
	
	detailText: {
		color: 'white',
		width: '80%',
		fontSize: 20
	},
	
	contentImage: {
		width: screenWidth * 0.9 * 0.5,
		height: screenWidth * 0.9 * 0.5 * 9/6,
		resizeMode: 'cover',
		borderRadius: 5,
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
