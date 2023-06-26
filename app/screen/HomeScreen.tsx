import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {CarouselMovie, CarouselNews, GenreList} from '../components';
import {IMovieReduxState} from '../interfaces';
import {RootState} from '../redux/store';
import {COLORS, FONTS, SIZES} from '../theme';

const HomeScreen = () => {
  const movieStore: IMovieReduxState = useSelector(
    (state: RootState) => state.movies,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.boxOfficeHeader}>Imdb Live</Text>
        <CarouselNews data={movieStore.latestNewsStore} />

        <Text style={styles.boxOfficeHeader}>Trend Movie</Text>
        <CarouselMovie data={movieStore.popularMovieStore} />

        <Text style={styles.boxOfficeHeader}>Movie Genre</Text>
        <GenreList data={movieStore.movieGenreStore} />

        <Text style={styles.boxOfficeHeader}>Trend Movie</Text>
        <CarouselMovie data={movieStore.popularTvShowStore} />

        <Text style={styles.boxOfficeHeader}>Tv Show Genre</Text>
        <GenreList data={movieStore.tvShowGenreStore} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    flexDirection: 'column',
  },
  boxOfficeHeader: {
    ...FONTS.h1,
    marginHorizontal: SIZES.horizontalPadding,
    color: COLORS.WHITE,
    marginTop: SIZES.medium,
    marginBottom: SIZES.small,
  },
  containerLoading: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
