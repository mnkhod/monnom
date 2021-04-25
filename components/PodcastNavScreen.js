import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View, ScrollView  } from 'react-native';
import TinyImagedList from './TinyImagedList.js';
import PodcastCardList from './PodcastCardList.js';
import LongImageCarousel from './LongImageCarousel.js';

export default function PodcastNavScreen() {

	return (

		<FlatList
			style={styles.container}
			ListHeaderComponent={
				<>
					<View style={styles.innerContainer}>
						<PodcastCardList
							title={'Хадгалсан подкастууд'}
							savedPodcast={true}
						/>
						<LongImageCarousel
							title={'Гадаадын шилдэг подкастууд'}
							titleColor={'#DE5246'}
						/>
						<TinyImagedList
							title={'Шинээр нэмэгдсэн дугаарууд'}
						/>
						<PodcastCardList
							title={'Уран зөгнөлт'}
						/>
						<PodcastCardList
							title={'Бизнес, эдийн засаг'}
						/>
						<PodcastCardList
							title={'Уран зөгнөлт'}
						/>
					</View>
				</>
			}
		/>
	)

}

let styles = StyleSheet.create({
	container: {
		backgroundColor: '#0F191E',
	},

	innerContainer: {
		marginLeft: '5%'
	},


})
