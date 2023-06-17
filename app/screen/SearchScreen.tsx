import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {CustomInput} from '../components';
import {Movie} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const [displayedData, setDisplayedData] = useState<Movie[] | null>();
  // const [selectedCategory, setSelectedCategory] = useState(
  //   SEARCH_CATEGORIES[0],
  // );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, FONTS.h1]}>
        {'Find Movies, Tv series, and more..'}
      </Text>
      <View style={styles.searchHolder}>
        <CustomInput
          defaultValue={searchValue}
          onChange={txt => setSearchValue(txt)}
          iconName={'search'}
          placeholder={'search people,movie,tv show...'}
        />
      </View>
      {/* <SearchCategories
        selectedCategory={selectedCategory}
        onChange={(catName: string) => setSelectedCategory(catName)}
      /> */}
      {/* <MovieList data={displayedData!} isLoading={isLoading} /> */}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.horizontalPadding,
  },
  category: {
    marginHorizontal: SIZES.small,
    color: COLORS.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  header: {
    marginHorizontal: SIZES.horizontalPadding,
    marginTop: SIZES.verticalPadding,
    color: COLORS.WHITE,
  },
  searchHolder: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.horizontalPadding,
  },
});
