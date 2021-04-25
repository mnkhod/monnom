import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Slider from 'react-native-slider';

const {width: screenWidth} = Dimensions.get('window');

export default function AudioControl({ bookPlayer }) {
	let [ volumeSliderValue, setVolumeSliderValue ] = useState(0.6);
	let [ isPlaying, setIsPlaying ] = useState();
	let volumeSlider = useRef();

	let handleVolumeChange = (volume) => {

	}

	let handlePositionChange = (position) => {
	}
	useEffect(() => {
	},[])

	return (
		<View style={styles.container} >
			<Slider
				value={0}
				onValueChange={handlePositionChange}
				onSlidingComplete={e => console.log(e)}
				width={screenWidth * 0.9}
				animationType={'spring'}
				thumbTintColor={'white'}
				minimumTrackTintColor={'#DE5246'}
				maximumTrackTintColor={'#DE5246'}
				thumbTouchSize={{ width: 50, height: 50 }}
			/>
			<View style={styles.controller} >
				{
					bookPlayer ? (
						<TouchableOpacity style={styles.iconContainer} >
							<MaterialCommunityIcons name="skip-previous" color={'white'} size={35} />
						</TouchableOpacity>
					):(
						<TouchableOpacity style={styles.iconContainer} >
							<Ionicons name="cloud-download-outline" color={'white'} size={35} />
						</TouchableOpacity>
					)
				}
				<TouchableOpacity style={styles.iconContainer} >
					<MaterialIcons name="rotate-left" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.midIconContainer}  >
					<FontAwesome name="play" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.midIconContainer} >
					<FontAwesome name="pause" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} >
					<MaterialIcons name="rotate-right" color={'white'} size={25} />
				</TouchableOpacity>
				{
					bookPlayer ? (
						<TouchableOpacity style={styles.iconContainer} >
							<MaterialCommunityIcons name="skip-next" color={'white'} size={35} />
						</TouchableOpacity>
					):(
						<TouchableOpacity style={styles.iconContainer} >
							<MaterialCommunityIcons name="bookmark-outline" color={'white'} size={35} />
						</TouchableOpacity>
					)
				}
			</View>
			<View style={styles.soundSliderContainer} >
				<MaterialCommunityIcons name="volume-medium" color={'#DE5246'} size={25} />
				<Slider
					value={0}
					ref={volumeSlider}
					onValueChange={handleVolumeChange}
					width={screenWidth * 0.65}
					thumbTintColor={'white'}
					minimumTrackTintColor={'#DE5246'}
					maximumTrackTintColor={'#DE5246'}
					step={0.05}
				thumbTouchSize={{ width: 50, height: 50 }}
				/>
				<MaterialCommunityIcons name="volume-high" color={'#DE5246'} size={25} />
			</View>
		</View>
	)
}

let styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%'
	},
	
	iconContainer: {
		padding: 5,
	},
	
	midIconContainer: {
		height: 60,
		width: 60,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DE5246'
	},
	
	controller: {
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center'
	},
	
	soundSliderContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	
	
})
