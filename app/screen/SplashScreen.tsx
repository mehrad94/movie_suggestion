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
  console.log({latestNews});
  const dispatch = useDispatch();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [state, setState] = useState({
    latestNews: false,
    popularMovie: false,
    popularTvShow: false,
    movieGenre: false,
    showGenre: false,
    topMovie: false,
  });
  useEffect(() => {
    if (latestNews.data && latestNews.data.length > 0) {
      dispatch(latestNewsStore(latestNews.data!));
      setState(prev => ({...prev, latestNews: true}));
    }
    if (latestNews.isError) {
      latestNews.refetch();
    }
  }, [latestNews, dispatch]);

  useEffect(() => {
    if (popularMovie.data && popularMovie.data.length > 0) {
      dispatch(popularMovieStore(popularMovie.data!));
      setState(prev => ({...prev, popularMovie: true}));
    }
    if (popularMovie.isError) {
      popularMovie.refetch();
    }
  }, [popularMovie, dispatch]);

  useEffect(() => {
    if (movieGenre.data && movieGenre.data.length > 0) {
      dispatch(movieGenreStore(movieGenre.data!));
      setState(prev => ({...prev, movieGenre: true}));
    }
    if (movieGenre.isError) {
      movieGenre.refetch();
    }
  }, [movieGenre, dispatch]);

  useEffect(() => {
    if (showGenre.data && showGenre.data.length > 0) {
      dispatch(tvShowGenreStore(showGenre.data!));
      setState(prev => ({...prev, showGenre: true}));
    }
    if (showGenre.isError) {
      showGenre.refetch();
    }
  }, [showGenre, dispatch]);

  useEffect(() => {
    if (topMovie.data && topMovie.data.length > 0) {
      dispatch(top250MovieStore(topMovie.data!));
      setState(prev => ({...prev, topMovie: true}));
    }
    if (topMovie.isError) {
      topMovie.refetch();
    }
  }, [topMovie, dispatch]);

  useEffect(() => {
    if (popularTvShow.data && popularTvShow.data.length > 0) {
      dispatch(popularTvShowStore(popularTvShow.data!));
      setState(prev => ({...prev, popularTvShow: true}));
    }
    if (popularTvShow.isError) {
      popularTvShow.refetch();
    }
  }, [popularTvShow, dispatch]);

  console.log({state, loadingProgress});
  useEffect(() => {
    if (
      loadingProgress >= 100 &&
      Object.values(state).every(value => value === true)
    ) {
      navigation.replace('BOTTOM_TAB_STACK', {screen: 'SCREEN_HOME'});
    }
    setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(loadingProgress + 10);
      }
    }, 500);
  }, [loadingProgress, navigation, state]);

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
