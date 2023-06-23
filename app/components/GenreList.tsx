import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IGenreResponse} from '../interfaces';
import {COLORS, FONTS, RANDOM_COLOR, SIZES} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  data: IGenreResponse[];
};

function renderItem(genre: IGenreResponse) {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.7}}
      colors={[
        COLORS.BLACK_TRANSPARENT,
        RANDOM_COLOR[Math.floor(Math.random() * 10)],
      ]}
      style={[styles.itemContainer]}>
      <Text style={styles.txtGenre}>{genre.title}</Text>
    </LinearGradient>
  );
}

const GenreList: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.title}
        data={data}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

export default GenreList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.small,
  },
  itemContainer: {
    height: SIZES.height / 15,
    margin: SIZES.small,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtGenre: {
    color: COLORS.WHITE,
    ...FONTS.h2,
  },
});
