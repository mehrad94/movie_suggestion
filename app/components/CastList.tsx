import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICast} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';

type Props = {
  data: ICast[];
};

const castItem = (item: ICast) => {
  return (
    <View style={styles.container}>
      <Image style={styles.moviePoster} source={{uri: item.avatar}} />
      <Text style={styles.txtCastName}>{item.name}</Text>
      <Text style={styles.txtCastCharacter}>{item.character}</Text>
    </View>
  );
};

const CastList: React.FC<Props> = ({data}) => {
  return (
    <FlatList
      initialNumToRender={5}
      horizontal
      keyExtractor={item => item.name}
      data={data}
      renderItem={({item}) => castItem(item)}
    />
  );
};

export default CastList;

const styles = StyleSheet.create({
  txtCastCharacter: {
    color: COLORS.GRAY_600,
    textAlign: 'center',
    ...FONTS.h3,
  },
  txtCastName: {
    color: COLORS.WHITE,
    ...FONTS.h2,
  },
  moviePoster: {
    width: SIZES.width / 3,
    height: SIZES.width / 3,
    borderRadius: 100,
  },
  container: {
    marginHorizontal: SIZES.medium,
  },
});
