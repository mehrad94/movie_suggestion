import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CustomInput, CustomLoading} from '../components';
import {useDebounce} from '../hooks';
import {ISearchResponse} from '../interfaces';
import {useSearchQuery} from '../redux/api-slice';
import {COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';

interface ISearchedCardPeople {
  poster: string;
  title: string;
  subtitle: string;
}

interface ISearchedCardTitle {
  avatar: string;
  title: string;
  year: string;
  stars: string[];
}

const SearchedCardPeople: React.FC<ISearchedCardPeople> = ({
  poster,
  title,
  subtitle,
}) => {
  return (
    <View style={styles.searchCardContainer}>
      {poster ? (
        <Image
          resizeMode="contain"
          source={{uri: posterUrl(poster, '256')}}
          style={styles.avatarImage}
        />
      ) : (
        <View style={styles.noImage}>
          <Icon
            style={{}}
            name={'user'}
            color={COLORS.WHITE}
            size={SIZES.width / 10}
          />
        </View>
      )}

      <View style={styles.titleHolder}>
        <Text style={[FONTS.h2, {color: COLORS.WHITE}]}>{title}</Text>
        <Text style={[FONTS.h3, {color: COLORS.WHITE, width: SIZES.width / 2}]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

const SearchedCardTitle: React.FC<ISearchedCardTitle> = ({
  avatar,
  title,
  year,
  stars,
}) => {
  return (
    <View style={styles.searchCardContainer}>
      {avatar ? (
        <Image
          resizeMode="contain"
          source={{uri: posterUrl(avatar, '256')}}
          style={styles.titleImage}
        />
      ) : (
        <View style={styles.noImage}>
          <Icon
            style={{}}
            name={'video'}
            color={COLORS.WHITE}
            size={SIZES.width / 10}
          />
        </View>
      )}

      <View style={styles.titleHolder}>
        <Text style={[FONTS.h2, {color: COLORS.WHITE}]}>{title}</Text>
        <Text style={[FONTS.h2, {color: COLORS.WHITE}]}>{year}</Text>
        <Text style={[FONTS.h3, {color: COLORS.WHITE}]}>{stars}</Text>
      </View>
    </View>
  );
};

const NoData = ({searchValue}: {searchValue: string}) => {
  return (
    <View>
      {searchValue.length > 0 ? <Text>{'No data found...'}</Text> : null}
    </View>
  );
};

const Loading = () => {
  return (
    <SafeAreaView style={styles.containerLoading}>
      <CustomLoading />
    </SafeAreaView>
  );
};

const DataLoader = (data: ISearchResponse) => {
  const [selectedType, setSelectedType] = useState('people');
  return (
    <View>
      <View style={styles.typeContainer}>
        <TouchableOpacity
          onPress={() => setSelectedType('people')}
          style={[selectedType === 'people' && styles.selectedType]}>
          <Text
            style={[
              styles.typeItem,
              selectedType === 'people' && styles.selectedType,
            ]}>
            {'People'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[selectedType === 'title' && styles.selectedType]}
          onPress={() => setSelectedType('title')}>
          <Text
            style={[
              styles.typeItem,
              selectedType === 'title' && styles.selectedType,
            ]}>
            {'Title'}
          </Text>
        </TouchableOpacity>
      </View>

      {selectedType === 'people' ? (
        <FlatList
          style={{height: SIZES.height / 1.7}}
          keyExtractor={item => item.link}
          data={data.people}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <SearchedCardPeople
              subtitle={item.subtitle}
              poster={item.avatar}
              title={item.title}
            />
          )}
        />
      ) : (
        <FlatList
          keyExtractor={item => item.stars[0]}
          data={data.titles}
          style={{height: SIZES.height / 1.7}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <SearchedCardTitle
              stars={item.stars}
              title={item.title}
              avatar={item.avatar}
              year={item.year}
            />
          )}
        />
      )}
    </View>
  );
};

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const {data, isLoading} = useSearchQuery(debouncedSearchTerm);
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
        {isLoading ? (
          <Loading />
        ) : data && searchValue.length > 0 ? (
          <DataLoader people={data.people} titles={data.titles} />
        ) : (
          <NoData searchValue={searchValue} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  selectedType: {
    color: COLORS.SECONDARY,
    borderBottomColor: COLORS.SECONDARY,
    borderBottomWidth: 1,
    paddingBottom: 1,
  },
  typeItem: {
    ...FONTS.h2,
    color: COLORS.WHITE,
    marginHorizontal: SIZES.small,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.medium,
  },
  avatarImage: {
    width: SIZES.width / 5,
    height: SIZES.width / 5,
    borderRadius: 100,
    marginRight: SIZES.medium,
  },
  titleImage: {
    width: SIZES.width / 6,
    height: SIZES.width / 4,
    borderRadius: SIZES.smallRadius,
    overflow: 'hidden',
    marginRight: SIZES.medium,
  },
  searchCardContainer: {
    flexDirection: 'row',
    marginTop: SIZES.medium,
  },
  titleHolder: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerLoading: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.WHITE,
  },
  searchTitle: {
    color: COLORS.WHITE,
    marginTop: SIZES.medium,
    marginBottom: 2,
  },
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
  noImage: {
    width: SIZES.width / 5,
    height: SIZES.width / 5,
    backgroundColor: COLORS.GRAY_600,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SIZES.medium,
  },
});
