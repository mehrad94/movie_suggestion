import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFetchMovieRatesQuery} from '../redux/omdb-slice';
import {
  useFetchMotionQuery,
  useFetchMotionRecommendationsQuery,
} from '../redux/tmdb-slice';

const VerticalMovieItem = () => {
  const ratings = useFetchMovieRatesQuery('tt0137523');
  const movie = useFetchMotionQuery({motionId: '550', motionType: 'movie'});
  const recommendation = useFetchMotionRecommendationsQuery({
    motionId: '550',
    motionType: 'movie',
  });
  console.log({TMDB: movie.data?.genres, RECOMMEND: recommendation.data});

  return (
    <View>
      <Text>VerticalMovieItem</Text>
    </View>
  );
};

export default VerticalMovieItem;

const styles = StyleSheet.create({});
