import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Dimensions, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


function TypeButton ({ type, text, activeButton, handleTypePress }) {
	return (
		<TouchableOpacity style={styles.btn} onPress={() => handleTypePress(type)}>
			<Text style={{
				...styles.btnText,
				color: activeButton == type  ? '#DE5246' : 'white'
			}} >
				{text}
			</Text>
			<View style={{
				...styles.btnBottomLine,
				backgroundColor: activeButton == type ? '#DE5246' : 'transparent'
			}} ></View>
		</TouchableOpacity>
	)
}


export default function SearchScreen({ navigation }) {
	let searchInput = useRef();

	useEffect(() => {
		let unsubscribe = navigation.addListener('focus', () => {
		});
		return unsubscribe;
	},[navigation])

	let [ activeButton, setactiveButton ] = useState('podcast');
	let handleTypePress = (type) => {
		setactiveButton(type)
	}

	return (
		<View style={styles.container}>
			<View style={styles.searchContainer} >
				<View style={styles.inputContainer} >
					<Icon name={'search'} size={25} color={'grey'} />
					<TextInput
						autoCorrect={false}
						style={styles.input} 
						textContentType='none'
						ref={searchInput}
						autoFocus={true}
					/>
				</View>
				<TouchableOpacity style={styles.searchButton} onPress={() => console.log('btn')}>
					<Text style={styles.searchText} >
						Xайх
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonsContainer} >
				<TypeButton
					type={'podcast'}
					text={'Подкаст'}
					activeButton={activeButton}
					handleTypePress={handleTypePress}
				/>
				<View style={styles.line} ></View>
				<TypeButton
					type={'audioBook'}
					text={'Аудио ном'}
					activeButton={activeButton}
					handleTypePress={handleTypePress}
				/>
				<View style={styles.line} ></View>
				<TypeButton
					type={'book'}
					text={'Ном'}
					activeButton={activeButton}
					handleTypePress={handleTypePress}
				/>
			</View>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#0F191E',
	},
	logo: {
		position: 'absolute',
		width: screenWidth,
		height: screenHeight,
		resizeMode: 'cover',
	},

	input: {
		marginLeft: 15,
		flex: 1
	},

	searchContainer: {
		marginTop: 20,
		flexDirection: 'row',
		width: '90%',
		alignItems: 'center'
	},

	searchButton: {
		flex: 1,
		alignItems: 'center',
	},

	searchText: {
		paddingVertical: 10,
		color: 'white'
	},


	inputContainer: {
		width: '80%',
		borderRadius: 15,
		padding: 10,
		backgroundColor: 'white',
		flexDirection: 'row'
	},

	buttonsContainer: {
		width: '90%',
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'space-between'
	},

	btn: {
		paddingHorizontal: '5%',
		paddingVertical: 5 
	},

	btnBottomLine: {
		height: 2,
		width: 40,
		alignSelf: 'center',
		marginTop: 5,
		borderRadius: 5,
		backgroundColor: '#DE5246'
	},

	btnText: {
		textAlign: 'center',
		fontSize: 16,
	},

	line: {
		width: 1,
		height: '100%',
		backgroundColor: 'grey'
	},

})
