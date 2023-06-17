import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {NewsType} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';

type Props = {
  data: NewsType[];
};

const CarouselNews = ({data}: Props) => {
  return (
    <Carousel
      loop
      width={SIZES.width}
      height={SIZES.height / 4}
      pagingEnabled={true}
      snapEnabled={true}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 1,
        parallaxScrollingOffset: SIZES.width / 7,
      }}
      data={data}
      scrollAnimationDuration={1000}
      renderItem={({item, index}) => {
        return (
          <View style={styles.container} key={index}>
            <ImageBackground
              resizeMode="stretch"
              style={styles.poster}
              source={{
                uri: item.banner,
              }}>
              <BlurView
                style={styles.blurContainer}
                blurType="extraDark"
                blurAmount={10}
                reducedTransparencyFallbackColor="#15141F">
                <Text style={[styles.movieTitle, FONTS.h3]}>
                  {item.title + ` ( ${item.duration} )`}
                </Text>
              </BlurView>
            </ImageBackground>
          </View>
        );
      }}
    />
  );
};

export default CarouselNews;

const styles = StyleSheet.create({
  blurContainer: {
    width: '90%',
    borderRadius: SIZES.largeRadius,
    padding: SIZES.small,
    paddingBottom: SIZES.medium,
  },
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
    height: SIZES.height / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: SIZES.width / 1.2,
    height: SIZES.width / 2,
    borderRadius: SIZES.largeRadius,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    paddingBottom: SIZES.small,
    alignItems: 'center',
  },
  movieTitle: {
    marginTop: SIZES.small,
    color: COLORS.WHITE,
    borderRadius: SIZES.mediumRadius,
    fontWeight: 'bold',
  },
  movieRating: {
    color: COLORS.WHITE,
  },
});
