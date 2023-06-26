import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {CustomLoading} from '../components';
import {IMovieFull, IMovieReduxState} from '../interfaces';
import {RootState} from '../redux/store';
import {COLORS} from '../theme';

const MovieScreen = () => {
  const selectedMovie: IMovieFull = useSelector(
    (state: RootState) => state.movies.selectedMovieStore,
  );

  useEffect(() => {}, [selectedMovie]);

  if (!selectedMovie.movieTitle) {
    return <CustomLoading />;
  }
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});