import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {IMoreLike} from '../interfaces';
import {idExtractor, posterUrl} from '../utils';
import {SIZES} from '../theme';

type Props = {
  data: IMoreLike[];
};

const littleMovie = (item: IMoreLike) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.moviePoster}
        source={{uri: posterUrl(item.poster, String(SIZES.width / 2))}}
      />
      <Text>{item.title}</Text>
    </View>
  );
};
const LittleMovieList: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      horizontal
      keyExtractor={item => idExtractor(item.url)}
      data={data}
      renderItem={({item}) => littleMovie(item)}
    />
  );
};

export default LittleMovieList;

const styles = StyleSheet.create({
  moviePoster: {
    width: SIZES.width / 3,
    height: SIZES.width / 2,
  },
  container: {
    marginHorizontal: SIZES.medium,
  },
});
