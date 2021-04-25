import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Dimensions, Image } from 'react-native';
import BookCard from '../components/BookCard.js';
import BookComment from '../components/BookComment.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Comments from '../components/Comments';
import BookCardList from '../components/BookCardList';

const {width: screenWidth} = Dimensions.get('window');

export default function SingleBookScreen({ navigation }) {

	return (
			<ScrollView style={styles.container} >
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
					<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
				</TouchableOpacity>
				<View style={styles.innerContainer} >
					<View style={styles.top} >
						<Image style={styles.bookImage} source={require('../assets/book-1.png')} />
					</View>
					<View style={styles.detailContainer} >
						<View style={styles.nameContainer} >
							<Text style={styles.name}>Ногоон нүдэн лам</Text>
							<Text style={styles.author}>Ц. Оюунгэрэл</Text>
						</View>
						<Text style={styles.price}>Үнэ: 17'900₮</Text>
					</View>
					<View style={styles.typesContainer} >
						<Text style={styles.soldNumber} >
							Худалдагдсан тоо: 103
						</Text>
						<View style={styles.iconsContainer} >
							<TouchableOpacity style={styles.iconContainer} onPress={() => navigation.push('bookPlayerScreen')}>
								<MaterialCommunityIcons name={'music-note'} color={'#DE5246'} size={25} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.iconContainer}>
								<MaterialCommunityIcons name={'eye'} color={'#DE5246'} size={25} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.iconContainer} onPress={() => navigation.push('buyBookScreen')}>
								<MaterialCommunityIcons name={'layers'} color={'#DE5246'} size={25} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.bookIntro} >
						<Text style={styles.introTitle} >Товч тайлбар:</Text>
						<Text
							style={styles.intro}
							numberOfLines={4}
						>
							Уг номыг Монголд улс төрийн хилс хэргээр хэлмэгдэж байсан хохирогчид, тэдгээрийн ар гэр, үр хүүхдэд зориулан бичжээ. Зохиолд хөдөөгийн залуу сайхан бүсгүй Сэндмаа, хийдийн идэр лам Баасан нарын ээдрээт
						</Text>
					</View>
					<View style={styles.quotes} >
						<Text style={styles.quotesTitle} >ИШЛЭЛ:</Text>
						<Text style={styles.quote} >" Боломжгүй (impossible) зүйл гэж үгүй, үг нь хүртэл i’m possible (би боломжтой) "</Text>
					</View>
					<View style={styles.commentsContainer} >
						<Text style={styles.commentTitle} >Сэтгэгдэлүүд:</Text>
						<View style={styles.innerCommentsContainer} >
							<Comments />
						</View>
					</View>
					<BookCardList
						title={'Ц. Оюунгэрэл'}
						titleColor={'white'}
					/>
				</View>
			</ScrollView>
	) 
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F191E',
	},
	
	innerCommentsContainer: {
		width: '100%',
		height: 200,
	},
	
	innerContainer: {
		width: '90%',
		alignSelf: 'center',
		alignItems: 'center'
	},
	
	bookImage: {
		borderRadius: 5,
		width: 150,
		height: 150 * 9/6,
		resizeMode: 'cover',
	},

	backButton: {
	},
	
	detailContainer: {
		width: '100%',
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	typesContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	
	iconContainer: {
		padding: 5,
		backgroundColor: '#3f474b',
		borderRadius: 100,
	},
	
	name: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	
	price: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	},
	
	author: {
		color: 'grey',
		fontSize: 15
	},
	
	soldNumber: {
		color: '#DE5246',
		paddingVertical: 10
	},
	
	iconsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '40%'
	},
	
	introTitle: {
		color: 'grey'
	},
	
	intro: {
		color: 'grey',
	},
	
	quotes: {
		marginVertical: 10,
		width: '100%'
	},
	
	quotesTitle: {
		 color: '#DE5246'
	},
	
	quote: {
		paddingVertical: 10,
		fontStyle: 'italic',
		alignSelf: 'center',
		width: '90%',
		color: 'white',
		textAlign: 'center'
	},
	
	commentsContainer: {
		width: '100%',
	},

	commentTitle: {
		color: 'white',
		fontSize: 20
	}
	
})
