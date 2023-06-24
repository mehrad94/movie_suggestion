import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  CarouselMovie,
  CarouselNews,
  CustomError,
  CustomLoading,
  GenreList,
} from '../components';
import {
  useGetMovieGenreQuery,
  useGetShowGenreQuery,
  useLatestNewsQuery,
  usePopularMovieQuery,
  usePopularTvShowQuery,
} from '../redux/api-slice';
import {COLORS, FONTS, SIZES} from '../theme';

const HomeScreen = () => {
  const popularMovie = usePopularMovieQuery();
  const popularTvShow = usePopularTvShowQuery();
  const latestNews = useLatestNewsQuery();
  const movieGenre = useGetMovieGenreQuery();
  const showGenre = useGetShowGenreQuery();

  if (
    popularMovie.isError ||
    popularTvShow.isError ||
    latestNews.isError ||
    movieGenre.isError ||
    showGenre.isError
  ) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <CustomError
          onClick={() => {
            popularMovie.refetch();
            popularTvShow.refetch();
            latestNews.refetch();
            movieGenre.refetch();
            showGenre.refetch();
          }}
        />
      </SafeAreaView>
    );
  }
  if (
    !showGenre.data ||
    !movieGenre.data ||
    popularMovie.isLoading ||
    !popularMovie.data ||
    popularTvShow.isLoading ||
    !popularTvShow.data ||
    !latestNews.data ||
    latestNews.isLoading
  ) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <CustomLoading />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.boxOfficeHeader}>Imdb Live</Text>
        <CarouselNews data={latestNews.data} />

        <Text style={styles.boxOfficeHeader}>Trend Movie</Text>
        <CarouselMovie data={popularMovie.data} />

        <Text style={styles.boxOfficeHeader}>Movie Genre</Text>
        <GenreList data={movieGenre.data} />

        <Text style={styles.boxOfficeHeader}>Trend Movie</Text>
        <CarouselMovie data={popularTvShow.data} />

        <Text style={styles.boxOfficeHeader}>Tv Show Genre</Text>
        <GenreList data={showGenre.data} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
