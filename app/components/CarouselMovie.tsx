import React, {memo, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import Carousel from 'react-native-snap-carousel';
import {useDispatch} from 'react-redux';
import {IRootStackParams, MovieType1} from '../interfaces';
import {useGetMovieInfoQuery} from '../redux/api-slice';
import {selectedMovieStore} from '../redux/movie-slice';
import {COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';
import {SCREEN_MOVIE} from '../values/constants';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

interface Props {
  data: MovieType1[];
}

const CarouselMovie: React.FC<Props> = ({data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<IRootStackParams>>();
  const dispatch = useDispatch();
  const [movieId, setMovieId] = useState('');
  const movieInfo = useGetMovieInfoQuery(movieId);

  useEffect(() => {
    if (movieId !== '' && !movieInfo.isLoading && movieInfo.data) {
      dispatch(selectedMovieStore(movieInfo.data));
      navigation.push(SCREEN_MOVIE);
    }
  }, [movieId, dispatch, movieInfo.data, movieInfo.isLoading, navigation]);

  const _renderItem = (movie: MovieType1) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setMovieId(movie.movieId);
        }}
        style={styles.itemContainer}
        key={movie.movieId}>
        <Image
          resizeMode="stretch"
          style={styles.movieBanner}
          source={{uri: posterUrl(movie.poster, String(SIZES.width))}}
        />
        <View style={styles.movieContentContainer}>
          <Text
            style={styles.txtTitle}>{`${movie.title} (${movie.year})`}</Text>
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
  return (
    <Carousel
      snapToAlignment="center"
      layout={'default'}
      loop
      data={data}
      renderItem={({item}) => _renderItem(item)}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  );
};

export default memo(CarouselMovie);

const styles = StyleSheet.create({
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
    width: SIZES.width / 1.4,
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
