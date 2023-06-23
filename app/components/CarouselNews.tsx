import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {NewsType} from '../interfaces';
import {COLORS, FONTS, SIZES} from '../theme';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

interface Props {
  data: NewsType[];
}
const CarouselNews: React.FC<Props> = ({data}) => {
  const _renderItem = (movie: NewsType, index: number) => {
    return (
      <View style={styles.itemContainer} key={index}>
        <Image
          source={{uri: movie.banner}}
          style={styles.newsItem}
          resizeMode="cover"
        />
        <View style={styles.contentHolder}>
          <Text style={styles.itemLabel}>{movie.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        loop
        data={data}
        renderItem={movie => _renderItem(movie.item, movie.index)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselNews;

const styles = StyleSheet.create({
  newsItem: {
    width: SIZES.width / 1.4,
    height: SIZES.height / 5,
  },

  itemContainer: {
    width: SIZES.width / 1.4,
    alignItems: 'center',
    borderRadius: SIZES.medium,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  itemLabel: {
    color: COLORS.WHITE,
    backgroundColor: COLORS.GRAY_TRANSPARENT,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
    ...FONTS.h2,
  },
  contentHolder: {
    width: '100%',
  },
});
