import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TinyImagedList ({ title }) {
	
	return (
			<View style={styles.container}>
				<Text style={styles.title} >
					{title}
				</Text>
				<View style={styles.listContainer} >
					<TouchableOpacity style={styles.iconContainer} >
						<MaterialCommunityIcons name="chevron-right" color={'white'} size={40} />
					</TouchableOpacity>
					<View style={styles.list} >
						<Image style={styles.tinyImage} source={require('../assets/podcast-1.png')} />
						<Text numberOfLines={1} style={styles.listText} >Ideree's podcast podcast 66: Lodoisambuu, Ulaanbal</Text>
					</View>
					<View style={styles.list} >
						<Image style={styles.tinyImage} source={require('../assets/podcast-2.png')} />
						<Text numberOfLines={1} style={styles.listText} >"Битгий сонс" 121: Бадрал, Ангараг</Text>
					</View>
					<View style={styles.list} >
						<Image style={styles.tinyImage} source={require('../assets/podcast-3.png')} />
						<Text numberOfLines={1} style={styles.listText} >"Joe rogan experience" 159: Elon musk</Text>
					</View>
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		marginVertical: 10
	},

	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
		marginBottom: 10,
	},
	
	list: {
	 flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 3
	},

	
	tinyImage: {
		width: 30,
		height: 30,
		resizeMode: 'cover'
	},
	
	listText: {
		color: 'white',
		marginLeft: 10,
		width: '70%',
	},
	
	iconContainer: {
		paddingHorizontal: 10,
		position: 'absolute',
		right: 0,
		height: '100%',
		justifyContent: 'center',
	},
	
	
	
})
