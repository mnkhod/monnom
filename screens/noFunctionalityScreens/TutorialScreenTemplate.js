import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';


let {width: screenWidth} = Dimensions.get('window');

//<LinearGradient colors={[screenState.gradientColor[0], screenState.gradientColor[1]]} style={styles.gradient}>
export default function TutorialScreenTemplate({screenState, navigation }) {

	return (
		<View style={styles.container}>
				<View style={styles.top} >
					<Image
						style={styles.circle}
						source={screenState.circle}
					/>
					<View style={styles.logoContainer} >
						<Image
							style={styles.logo}
							source={require('../../assets/logo.png')}
						/>
						<Image
							style={styles.logoText}
							source={screenState.logoText}
						/>
					</View>
				</View>
				<View style={styles.bottom} >
					<Image
						style={styles.mainImg}
						source={screenState.mainImg}
					/>
					<View style={styles.mainTextContainer} >
						<Text style={styles.mainText}>
							{screenState.mainText}
						</Text>
					</View>
					{
						screenState.screenNum != 3
							? (<TouchableOpacity
								style={styles.btn}
								onPress={() => navigation.push(screenState.screenNum == 1? 'tutorialTwo' : 'tutorialThree')}
							>
								<Text style={styles.btnText} >
									Үргэжлүүлэх
								</Text>
								<Image
									style={styles.arrowImg}
									source={require('../../assets/arrow.png')}
								/>
							</TouchableOpacity>)
							: (<View style={styles.navBtnContainer} >
								<TouchableOpacity style={styles.authBtn} onPress={() => navigation.push('signIn')}>
									<Text style={styles.authBtnText} >
										Нэвтрэх
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.authBtn} onPress={() => navigation.push('signUp')}>
									<Text style={styles.authBtnText} >
										Бүртгүүлэх
									</Text>
								</TouchableOpacity>
							</View>)
					}
				</View>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	
	navBtnContainer: {
		flexDirection: 'row',
		width: 280,
		justifyContent: 'space-between',
	},
	
	circle: {
		position: 'absolute',
		width: screenWidth,
		height: screenWidth,
		resizeMode: 'contain',
		top: -screenWidth / 3,
		left: -screenWidth / 4
	},

	btnText: {
		color: 'black',
	},
	
	authBtnText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 18,
	},

	top: {
		height: '30%'	
	},
	
	btn: {
		backgroundColor: 'white',
		marginHorizontal: 'auto',
		borderRadius: 20,
		paddingHorizontal: 70,
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},

	arrowImg: {
		position: 'absolute',
		right: 10,
		height: '60%',
		resizeMode: 'contain'
	},



	bottom: {
		width: '100%',
		alignItems: 'center',
		height: '70%'
	},

	mainImg: {
		height: '45%',
		resizeMode: 'contain',
	},
	
	mainTextContainer: {
		width: 290,
		height: 170,
		justifyContent: 'center'
	},
	
	mainText: {
		color: 'white',
		textAlign: 'center',
	},

	logo: {
		width: 100,
		height: 100
	},

	logoContainer: {
		margin: 30,
	},

	logoText: {
		width: 100,
		resizeMode: 'contain'
	},

	gradient: {
		width: '100%',
		height: '100%',
	},

})
