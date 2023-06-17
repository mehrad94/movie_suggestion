import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {CarouselNews, CustomCarouselA, CustomLoading} from '../components';
import {
  useLatestNewsQuery,
  usePopularMovieQuery,
  usePopularTvShowQuery,
} from '../redux/api-slice';
import {COLORS, FONTS, SIZES} from '../theme';

const HomeScreen = () => {
  const {data, isLoading} = usePopularMovieQuery();
  const popularTvShow = usePopularTvShowQuery();
  const latestNews = useLatestNewsQuery();
  if (
    isLoading ||
    !data ||
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
        <Text style={[styles.boxOfficeHeader, FONTS.h1]}>Latest News</Text>
        <CarouselNews data={latestNews.data} />
        <Text style={[styles.boxOfficeHeader, FONTS.h1]}>
          Most Popular Movie
        </Text>
        <View style={styles.popularMovieContainer}>
          <CustomCarouselA data={data!} />
        </View>
        <Text style={[styles.boxOfficeHeader, FONTS.h1]}>
          Most Popular Tv Show
        </Text>
        <View style={styles.popularMovieContainer}>
          <CustomCarouselA data={popularTvShow.data!} />
        </View>
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
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.horizontalPadding,
    color: COLORS.WHITE,
  },
  popularMovieContainer: {
    marginHorizontal: SIZES.small,
  },
  containerLoading: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
