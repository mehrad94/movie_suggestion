import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {MovieType1} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';

type Props = {
  data: MovieType1[];
};

const CustomCarouselA = ({data}: Props) => {
  return (
    <View>
      <View style={{flex: 1}}>
        <Carousel
          loop
          width={SIZES.width}
          height={SIZES.width}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,
            parallaxScrollingOffset: SIZES.width / 2.5,
          }}
          data={data}
          scrollAnimationDuration={1000}
          renderItem={({item, index}) => {
            return (
              <View style={styles.container} key={index}>
                <View style={styles.content}>
                  <Image
                    resizeMode="contain"
                    style={styles.poster}
                    source={{
                      uri: posterUrl(item.poster, String(SIZES.height / 2.5)),
                    }}
                  />
                  <Text style={[styles.movieTitle, FONTS.h2]}>
                    {item.title + ` (${item.year}) `}
                  </Text>
                  <View style={styles.ratingHolder}>
                    <Image
                      source={require('../assets/images/lg_imdb.png')}
                      style={styles.lgImdb}
                    />
                    <Text style={[styles.movieRating, FONTS.h3]}>
                      {item.rating === '' ? 'UNRATED' : item.rating}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CustomCarouselA;

const styles = StyleSheet.create({
  ratingHolder: {
    flexDirection: 'row',
  },
  lgImdb: {
    marginRight: SIZES.small,
    width: 32,
    height: 16,
  },
  container: {
    width: SIZES.width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: SIZES.width / 2,
  },
  poster: {
    height: SIZES.height / 3,
    borderRadius: SIZES.large,
    padding: SIZES.small,
  },
  movieTitle: {
    marginTop: SIZES.small,
    color: COLORS.WHITE,
  },
  movieRating: {
    color: COLORS.WHITE,
  },
});
