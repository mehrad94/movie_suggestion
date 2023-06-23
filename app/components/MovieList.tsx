import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces';
import {makePosterPath} from '../utils';
import CustomLoading from './CustomLoading';
import {COLORS, FONTS, SIZES} from '../theme';

type Props = {
  data: Movie[];
  isLoading: boolean;
};

const MovieItem: React.FC<Movie> = ({
  original_title,
  release_date,
  poster_path,
}) => {
  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        style={{width: '100%', height: 200}}
        source={{uri: makePosterPath(poster_path, 'w200')}}
      />
      <Text style={{color: COLORS.WHITE, ...FONTS.h3}}>{original_title}</Text>
      <Text style={{color: COLORS.WHITE, ...FONTS.h3}}>
        {`(${release_date.split('-')[0]})`}
      </Text>
    </View>
  );
};
const MovieList: React.FC<Props> = ({data, isLoading}) => {
  if (!data || isLoading) {
    return <CustomLoading />;
  }

  return (
    <FlatList
      keyExtractor={item => item.original_title}
      data={data}
      renderItem={({item}) => <MovieItem {...item} />}
      numColumns={2}
    />
  );
};

export default MovieList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'red',
    width: SIZES.width / 2,
    justifyContent: 'space-between',
  },
});
