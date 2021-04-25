import React, { useState, useEffect } from 'react';
import BookCardSaved from '../components/BookCardSaved.js';
import { StyleSheet, Text, View, FlatList } from 'react-native'

let data = [
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-3.png'),
		key: '1' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-2.png'),
		key: '2' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '3' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '4' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '6' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '7' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '8' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '9' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '10' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '11' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '12' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '13' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '14' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '15' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '16' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '17' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '18' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '19' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '20' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '21' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '22' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '23' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '24' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '25' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '26' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '27' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '28'
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '29' 
	},
]

export default function SavedBooksTab () {
	let [ books, setBooks ] = useState([]);
	useEffect(() => {
		setBooks(data);
	},[])

	return (
		<View style={styles.listContainer} >
			<FlatList
				data={books}
				numColumns={4}
				style={styles.flatList}
				showsVerticalScrollIndicator={false}
				renderItem={({item}) => (
					<BookCardSaved
						bookName={item.bookName}
						bookImageSource={item.bookImageSource}
					/>
				)}
			/>
		</View>
	)

}

let styles = StyleSheet.create({
	
	
	listContainer: {
		height: '100%',
		backgroundColor: '#0F191E',
		alignItems: 'center'
	},

	
	flatList: {
		paddingTop: 20,
	},
	
	
	
})
