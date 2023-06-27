import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ProgressBar} from '../components';
import {IRootStackParamList} from '../interfaces';
import {
  useGetMovieGenreQuery,
  useGetShowGenreQuery,
  useLatestNewsQuery,
  usePopularMovieQuery,
  usePopularTvShowQuery,
  useTopMovieQuery,
} from '../redux/api-slice';
import {
  latestNewsStore,
  movieGenreStore,
  popularMovieStore,
  popularTvShowStore,
  top250MovieStore,
  tvShowGenreStore,
} from '../redux/movie-slice';
import {COLORS, FONTS, SIZES} from '../theme';

type Props = NativeStackScreenProps<IRootStackParamList, 'SCREEN_SPLASH'>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  const latestNews = useLatestNewsQuery();
  const popularMovie = usePopularMovieQuery();
  const popularTvShow = usePopularTvShowQuery();
  const movieGenre = useGetMovieGenreQuery();
  const showGenre = useGetShowGenreQuery();
  const topMovie = useTopMovieQuery();
  const dispatch = useDispatch();
  const [loadingProgress, setLoadingProgress] = useState(0);
  useEffect(() => {
    if (
      loadingProgress >= 100 &&
      latestNews.data &&
      topMovie.data &&
      popularMovie.data &&
      popularTvShow.data &&
      movieGenre.data &&
      showGenre.data
    ) {
      dispatch(latestNewsStore(latestNews.data));
      dispatch(popularMovieStore(popularMovie.data));
      dispatch(popularTvShowStore(popularTvShow.data));
      dispatch(movieGenreStore(movieGenre.data));
      dispatch(top250MovieStore(topMovie.data));
      dispatch(tvShowGenreStore(showGenre.data));
      navigation.replace('BOTTOM_TAB_STACK', {screen: 'SCREEN_HOME'});
    }
    setTimeout(() => {
      setLoadingProgress(loadingProgress + 10);
    }, 1000);
  }, [
    loadingProgress,
    latestNews,
    dispatch,
    popularMovie,
    popularTvShow,
    movieGenre,
    showGenre,
    navigation,
    topMovie,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/ic_launcher.png')}
        style={styles.imgLogo}
      />
      <Text style={styles.txtAppName}>{'Movie Suggestion'}</Text>
      <Text style={styles.txtSlang}>{'Find, Explore, Enjoy'}</Text>
      <View style={styles.loadingContainer}>
        <ProgressBar progress={loadingProgress / 100} duration={2000} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: SIZES.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: SIZES.width / 2,
    height: SIZES.width / 2,
  },
  txtAppName: {
    ...FONTS.h1,
    color: COLORS.WHITE,
    marginTop: SIZES.small,
  },
  txtSlang: {
    ...FONTS.h2,
    color: COLORS.SECONDARY,
    marginTop: SIZES.small,
  },
});
