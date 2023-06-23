import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {interpolate} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

import {MovieType1} from '../interfaces';
import {CAROUSEL_SIZE, COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';
import {BlurView} from '@react-native-community/blur';

interface Props {
  data: MovieType1[];
}
const CarouselVertical: React.FC<Props> = ({data}) => {
  const RIGHT_OFFSET = SIZES.width * (1 - SIZES.SCALE);

  const animationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-CAROUSEL_SIZE.ITEM_HEIGHT, 0, CAROUSEL_SIZE.ITEM_HEIGHT],
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3],
      );
      return {
        transform: [{translateY}],
        right,
      };
    },
    [RIGHT_OFFSET],
  );
  const [currentImage, setCurrentImage] = React.useState(
    posterUrl(data[0].poster, '256'),
  );
  const [currentMovie, setCurrentMovie] = React.useState({
    title: data[0].title,
    rating: data[0].rating,
    rank: 1,
  });
  return (
    <View>
      <View style={styles.movieInformation}>
        <BlurView
          blurType="extraDark"
          blurAmount={10}
          reducedTransparencyFallbackColor="#15141F">
          <Text style={styles.movieTitle}>
            {currentMovie.rank + ') ' + currentMovie.title}
          </Text>
          <View style={styles.ratingHolder}>
            <Image
              source={require('../assets/images/lg_imdb.png')}
              style={styles.imdbLogo}
            />
            <Text style={styles.movieTitle}>{currentMovie.rating}</Text>
          </View>
        </BlurView>
      </View>

      {/* <Image
        blurRadius={10}
        source={{uri: currentImage}}
        style={styles.fullPageBackgroundImage}
      /> */}
      <Carousel
        windowSize={2}
        // onScrollEnd={index => {
        //   setCurrentMovie({
        //     title: data[index].title,
        //     rating: data[index].rating,
        //     rank: index + 1,
        //   });
        //   setCurrentImage(posterUrl(data[index].poster));
        // }}
        loop
        vertical
        style={styles.carouselContainer}
        width={CAROUSEL_SIZE.ITEM_WIDTH}
        pagingEnabled={false}
        height={CAROUSEL_SIZE.ITEM_HEIGHT}
        data={data}
        renderItem={({index, item}) => {
          console.log({i: posterUrl(item.poster, '256')});
          return (
            <View key={index}>
              <View>
                <Image
                  style={styles.moviePoster}
                  source={{
                    uri: posterUrl(item.poster, '256'),
                  }}
                />
              </View>
            </View>
          );
        }}
        customAnimation={animationStyle}
      />
    </View>
  );
};
export default CarouselVertical;

const styles = StyleSheet.create({
  ratingHolder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbLogo: {
    width: SIZES.width / 10,
    height: SIZES.height / 40,
    marginTop: 4,
    marginRight: 4,
    borderRadius: SIZES.small,
  },
  carouselContainer: {
    justifyContent: 'center',
    width: SIZES.width,
    height: SIZES.height - SIZES.height / 6.5,
  },
  fullPageBackgroundImage: {
    width: SIZES.width,
    height: SIZES.height,
    position: 'absolute',
  },
  movieInformation: {
    left: 10,
    right: 10,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 4,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
  },

  movieTitle: {
    ...FONTS.h2,
    color: COLORS.WHITE,
    fontWeight: '800',
  },
  blurContainer: {
    width: '90%',
    borderRadius: SIZES.largeRadius,
    padding: SIZES.small,
    paddingBottom: SIZES.medium,
  },
  moviePoster: {
    width: CAROUSEL_SIZE.ITEM_WIDTH,
    height: CAROUSEL_SIZE.ITEM_HEIGHT,
    borderRadius: 10,
    marginRight: 5,
  },
});
