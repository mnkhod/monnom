import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
	let navigation = useNavigation();
	let activeFancyAnime = useRef(new Animated.Value(0)).current;
	let [ activeLink, setActiveLink ] = useState(1);
	let animateToIndex = (index) => {
		let translateValue;
		switch (index) {
			case 1:
				translateValue = 0;
				break;
			case 2:
				translateValue = 118;
				break;
			case 3:
				translateValue = 220;
				break;
		}

		Animated.timing(
			activeFancyAnime,
			{
				toValue: translateValue,
				duration: 200,
				useNativeDriver: true
			}
		).start();
	}

	let activateNav = (index) => {
		switch(index) {
			case 1:
				navigation.navigate('libraryStack');
				break;
			case 2:
				navigation.navigate('podcastStack');
				break;
			case 3:
				navigation.navigate('liveStack');
				break;
		}
		animateToIndex(index);
		setActiveLink(index);
	}
  
	return (
			<View style={styles.container}>
				<View style={styles.navBarContainer} >
					<TouchableOpacity style={styles.navLinkOne} onPress={() => activateNav(1)}>
						<Text style={{...styles.navtext,color: activeLink == 1? '#DE5246': 'white'}}>
							Номын сан
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navLinkTwo} onPress={() => activateNav(2)}>
						<Text style={{...styles.navtext,color: activeLink == 2? '#DE5246': 'white'}}>
							Подкаст
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navLinkThree} onPress={() => activateNav(3)}>
						<Text style={{...styles.navtext,color: activeLink == 3? '#DE5246': 'white'}} >
							Монлайв
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.fancyLine} >
					<Animated.View style={{ ...styles.activeNavLine, transform: [{translateX: activeFancyAnime}] }}></Animated.View>
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		paddingVertical: 25,
		justifyContent: 'center',
		alignItems: 'center',
	backgroundColor: '#0F191E'
	},

	
	navBarContainer: {
		width: 310,
		flexDirection: 'row',
	},


	navLinkOne: {
		paddingVertical: 10,
		width: '36%',
		alignItems: 'flex-start'
	},

	navLinkTwo: {
		paddingVertical: 10,
		width: '33%',
		alignItems: 'center',
	},

	navLinkThree: {
		paddingVertical: 10,
		width: '30%',
		alignItems: 'flex-end'
	},
	
	activeNavLine: {
		width: 90,
		height: 2,
		backgroundColor: 'rgb(222, 82, 70)'
	},
	
	fancyLine: {
		marginTop: 5,
		height: 2,
		width: 310,
		backgroundColor: 'rgba(222, 82, 70,0.3)',
	},
	
	navtext: {
		fontSize: 17,
		fontWeight: '700',
		color: 'white'
	},
	

})
