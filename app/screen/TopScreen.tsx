import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {CustomLoading} from '../components';
import {useTopMovieQuery} from '../redux/api-slice';
import {COLORS} from '../theme';

const TopScreen = () => {
  const {data, isLoading} = useTopMovieQuery();
  if (isLoading || !data) {
    return (
      <SafeAreaView style={styles.containerLoading}>
        <CustomLoading />
      </SafeAreaView>
    );
  }
  return <SafeAreaView style={styles.container} />;
};

export default TopScreen;

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
