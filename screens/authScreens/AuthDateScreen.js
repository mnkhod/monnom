import React, { useState, useEffect } from 'react';
import { StyleSheet,  Image, TouchableOpacity, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AuthWarning from '../../components/AuthWarning'
import { useSignUp } from '../../contexts/AuthContext'


export default function AuthDateScreen({ navigation }) {
	let { signUpState, setBirthday } = useSignUp();
	let [ showWarning, setShowWarning ] = useState(false);

	let [ date, setDate ] = useState({
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
	})
	let [ showDatePicker, setShowDatePicker ] = useState(false);
	

	let handleDatePickerChange = (newDate) => {
		setShowDatePicker(false);
		setDate({
			year: newDate.getFullYear(),
			month: newDate.getMonth() + 1,
			date: newDate.getDate(),
		})
		setBirthday(date)
	}

	let handleContinue = () => {
		navigation.push('authGenderScreen');
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
			  <DateTimePickerModal
				isVisible={showDatePicker}
				mode="date"
				  date={new Date()}
				  onConfirm={handleDatePickerChange}
				  onCancel={() => setShowDatePicker(false) }
			  />
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>Төрсөн өн сар өдөр өө оруулна уу.</Text>
				</View>
				<View style={styles.formContainer} >
					<TouchableOpacity
						style={styles.datePicker}
						onPress={() => setShowDatePicker(true)}
					>
						<View style={styles.year}>
							<Text style={styles.dateText}>
								{date.year} оны
							</Text>
						</View>
						<View style={styles.month} >
							<Text style={styles.dateText}>
								{date.month} сар
							</Text>
						</View>
						<View style={styles.date}>
							<Text style={styles.dateText} >
								{date.date}
							</Text>
						</View>
					</TouchableOpacity>
					<AuthButton
						onPress={handleContinue}
						text={'Үргэлжлүүлэx'}
					/>
				</View>
						
			</KeyboardAvoidingView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	
	logoText: {
		height: 40,
		resizeMode: 'contain',
	},
	
	dateText: {
		fontWeight: '600'
	},
	
	year: {
		flex: 1,
		alignItems: 'flex-start'
	},
	
	month: {
		flex: 1,
		alignItems: 'center'
	},

	date: {
		flex: 1,
		alignItems: 'flex-end'
	},
	
	datePicker: {
		width: 300,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 15,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 11.95,

		elevation: 5,
	},
	
	inputsContainer: {
		height: '55%',
		justifyContent: 'space-between',
	},
	
	formContainer: {
		justifyContent: 'space-between',
		height: 180,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 30,
		fontWeight: '200'
	},
	
})
