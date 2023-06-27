import React, {memo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {VerticalCarousel} from '../components';
import {MovieType1} from '../interfaces';
import {RootState} from '../redux/store';
import {COLORS} from '../theme';

const TopScreen = () => {
  const topMovie: MovieType1[] = useSelector(
    (state: RootState) => state.movies.top250MovieStore,
  );

  return (
    <SafeAreaView style={styles.container}>
      <VerticalCarousel data={topMovie} />
    </SafeAreaView>
  );
};

export default memo(TopScreen);

const styles = StyleSheet.create({
  containerLoading: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});
