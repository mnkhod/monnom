import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity,  Text, View, FlatList } from 'react-native'
import BookCard from './BookCard.js';

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
export default function BookCardList ({ title, titleColor,  }) {
	let [ bookList, setBookList ] = useState();
	useEffect(() => {
		setBookList(data)
	},[])

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer} >
				<Text style={{ ...styles.title, color: titleColor ? titleColor : '#DE5246' }} >
					{title}
				</Text>
			</View>
				<FlatList 
					nestedScrollEnabled={true}
					data={bookList}
					renderItem={({ item }) => (
						<BookCard 
							author={item.author}
							bookName={item.bookName}
							bookImageSource={item.bookImageSource}
						/>		
					)} 
					howsHorizontalScrollIndicator={false}
					horizontal={true}
				/>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},

	title: {
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
		marginBottom: 10,
	},
})
