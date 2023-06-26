import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {MovieType1} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';

type Props = {
  data: MovieType1[];
};

const _renderItem = (movie: MovieType1, index: number) => {
  return (
    <TouchableOpacity style={styles.itemContainer} key={movie.movieId}>
      <Image
        resizeMode="stretch"
        style={styles.movieBanner}
        source={{uri: posterUrl(movie.poster, String(SIZES.width))}}
      />
      <View style={styles.movieContentContainer}>
        <View style={styles.titleContainer}>
          <Text style={[{color: COLORS.WHITE}, FONTS.h2]}>{`${
            index + 1
          }) `}</Text>
          <Text
            style={styles.txtTitle}>{`${movie.title} (${movie.year})`}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image
            resizeMode="stretch"
            source={require('../assets/images/lg_imdb.png')}
            style={styles.imdbLogo}
          />
          <Text style={styles.txtRating}>{movie.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const VerticalCarousel: React.FC<Props> = ({data}) => {
  return (
    <React.Fragment>
      <View style={styles.pageTitleContainer}>
        <TextInput editable={false} style={styles.title}>
          {'Top 250 Movie IMDB'}
        </TextInput>
      </View>
      <Carousel
        keyExtractor={item => item.movieId}
        vertical
        snapToAlignment="center"
        data={data}
        renderItem={({item, index}) => _renderItem(item, index)}
        sliderHeight={SIZES.height}
        itemHeight={Math.round(SIZES.height * 0.55)}
      />
    </React.Fragment>
  );
};

export default VerticalCarousel;

const styles = StyleSheet.create({
  title: {
    ...FONTS.h2,
    fontSize: 32,
    color: COLORS.WHITE,
    textAlign: 'center',
    borderBottomColor: COLORS.SECONDARY,
    borderBottomWidth: 1,
    lineHeight: 40,
    transform: [{rotate: '90deg'}],
  },
  pageTitleContainer: {
    width: SIZES.width,
    height: SIZES.height,
    zIndex: 10,
    left: SIZES.width / 2.7,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
  },
  titleContainer: {
    width: '93%',
    marginRight: SIZES.small,
    flexDirection: 'row',
  },
  txtTitle: {
    color: COLORS.WHITE,
    ...FONTS.h2,
  },
  txtRating: {
    color: COLORS.WHITE,
    ...FONTS.h2,
    marginLeft: SIZES.small,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  imdbLogo: {
    width: SIZES.large * 2,
    height: SIZES.medium,
  },
  movieContentContainer: {
    width: '100%',
    backgroundColor: COLORS.GRAY_TRANSPARENT,
    padding: SIZES.small,
  },
  movieBanner: {
    width: '100%',

    height: SIZES.height / 2.3,
  },
  itemContainer: {
    width: SIZES.width / 1.2,
    alignItems: 'center',
    borderRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.largeRadius,
    borderTopRightRadius: SIZES.largeRadius,
    overflow: 'hidden',
  },
  itemLabel: {
    color: 'white',
    backgroundColor: COLORS.GRAY_TRANSPARENT,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    ...FONTS.h3,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentHolder: {
    width: '100%',
  },
});
