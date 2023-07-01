import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {
  BackIcon,
  CastList,
  CustomLoading,
  LittleMovieList,
} from '../components';
import {IMovieFull, IRootStackParamList} from '../interfaces';
import {RootState} from '../redux/store';
import {COLORS, FONTS, SIZES} from '../theme';
import {posterUrl} from '../utils';

type Props = NativeStackScreenProps<IRootStackParamList, 'SCREEN_MOVIE'>;

const MovieScreen: React.FC<Props> = ({navigation}) => {
  const selectedMovie: IMovieFull = useSelector(
    (state: RootState) => state.movies.selectedMovieStore,
  );

  if (!selectedMovie.movieTitle) {
    return <CustomLoading />;
  }

  function onBack() {
    const routes = navigation.getState().routes;
    navigation.replace(routes[0].name);
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <Image
        style={styles.movieGallery}
        source={{uri: posterUrl(selectedMovie.gallery[0], String(SIZES.width))}}
      />
      {/* Title */}
      <View style={styles.rowHolder}>
        <Image
          style={styles.poster}
          source={{
            uri: posterUrl(selectedMovie.poster, String(SIZES.width / 3)),
          }}
        />
        <View>
          <Text style={styles.movieTitle}>{selectedMovie.movieTitle}</Text>
          <View style={styles.durationHolder}>
            <Icon name={'clock'} size={SIZES.width / 25} color={COLORS.WHITE} />
            <Text style={styles.txtDuration}>{selectedMovie.duration}</Text>
          </View>
          <View style={styles.ratingHolder}>
            <Icon name={'star'} size={SIZES.width / 25} color={COLORS.WHITE} />
            <Text style={styles.txtDuration}>
              {selectedMovie.rating} (IMDB)
            </Text>
          </View>
        </View>
      </View>
      {/* Storyline */}
      <View style={styles.rowHolder}>
        <Text style={styles.rowTitle}>{selectedMovie.storyline}</Text>
      </View>
      {/* Released date */}
      <View style={styles.rowHolder}>
        <Text style={styles.rowTitle}>{'Release Date:'}</Text>
        <Text style={styles.rowContent}>{selectedMovie.releasedYear}</Text>
      </View>
      {/* Directors */}
      <View style={styles.rowHolder}>
        <Text style={styles.rowTitle}>{'Directors:'}</Text>
        <FlatList
          keyExtractor={item => item}
          data={selectedMovie.directors}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Text style={styles.txtGenre}>{item}</Text>}
        />
      </View>
      {/* Writers */}
      <View style={styles.rowHolder}>
        <Text style={styles.rowTitle}>{'Writers:'}</Text>
        <FlatList
          keyExtractor={item => item}
          data={selectedMovie.writers}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Text style={styles.txtGenre}>{item}</Text>}
        />
      </View>
      {/* Genres */}
      <View style={styles.rowHolder}>
        <Text style={styles.rowTitle}>{'Genres:'}</Text>
        <FlatList
          keyExtractor={item => item}
          data={selectedMovie.genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Text style={styles.txtGenre}>{item}</Text>}
        />
      </View>
      {/* MoreLike */}
      <View style={styles.rowHolder}>
        <View>
          <Text style={styles.txtMoreLike}>{'Top Cast'}</Text>
          <CastList data={selectedMovie.casts} />
        </View>
      </View>
      {/* MoreLike */}
      <View style={styles.rowHolder}>
        <View>
          <Text style={styles.txtMoreLike}>{'More Like'}</Text>
          <LittleMovieList data={selectedMovie.moreLike} />
        </View>
      </View>
      <BackIcon onBack={onBack} />
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  txtMoreLike: {
    ...FONTS.h2,
    marginBottom: SIZES.small,
    color: COLORS.WHITE,
  },
  txtGenre: {
    marginLeft: SIZES.small,
    ...FONTS.h3,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    borderColor: COLORS.GRAY_TRANSPARENT,
    borderWidth: 1,
    borderRadius: SIZES.smallRadius,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
  },
  rowContent: {
    color: COLORS.WHITE,
    ...FONTS.h2,
    marginLeft: SIZES.small,
    fontWeight: '400',
  },
  rowTitle: {
    color: COLORS.WHITE,
    ...FONTS.h3,
    marginLeft: SIZES.small,
    fontWeight: 'bold',
  },
  ratingHolder: {
    marginLeft: SIZES.medium,
    marginTop: SIZES.small,
    flexDirection: 'row',
  },
  txtDuration: {
    ...FONTS.h3,
    marginLeft: SIZES.small,
    color: COLORS.WHITE,
  },
  durationHolder: {
    marginLeft: SIZES.medium,
    flexDirection: 'row',
  },
  rowHolder: {
    alignItems: 'center',
    marginTop: SIZES.small,
    flexDirection: 'row',
    borderBottomColor: COLORS.GRAY_TRANSPARENT,
    borderBottomWidth: 1,
    paddingBottom: SIZES.small,
    marginHorizontal: SIZES.medium,
  },
  poster: {
    borderRadius: SIZES.mediumRadius,
    width: SIZES.width / 3,
    height: SIZES.width / 2,
    marginTop: '-25%',
    marginLeft: SIZES.large,
  },
  movieTitle: {
    ...FONTS.h1,
    color: COLORS.WHITE,
    marginLeft: SIZES.small,
    marginTop: SIZES.small,
  },
  movieGallery: {
    width: SIZES.width,
    height: SIZES.height / 3,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});
