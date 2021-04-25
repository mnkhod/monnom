import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

let episodes = [ 1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8, ];

let PodcastComment = () => {
	return (
		<View style={styles.commentContainer} >
			<View style={styles.usernameContainer} >
				<Text style={styles.username} >Bayrmaa</Text>
				<Text style={styles.date} >2021-05-15</Text>
			</View>
			<Text style={styles.comment} >Хүргүүлж худалдан авдаг цэс нь үнэхээр таалагдлаа, цаг хэмнэсэн та бүхэнд баярлалаа</Text>
		</View>
	)
}

export default function Comments() {

	return (
		<View style={styles.listContainer} >
			<FlatList
				nestedScrollEnabled={true}
				data={episodes}
				renderItem={({item}) => (
					<PodcastComment name={item} />
				)}
			/>
		</View>
	)

}

let styles = StyleSheet.create({
	listContainer: {
		width: '100%',
		flex: 1,
		paddingTop: 20,
	},
	
	commentContainer: {
		marginBottom: 15,
	},
	
	username: {
		color: '#DE5246',
		fontWeight: 'bold'
	},
	
	comment: {
		color: 'white'
	},
	
	date: {
		color: '#DE5246',
	},
	
	usernameContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5 
	},
	
})
