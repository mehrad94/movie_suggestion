import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {MovieType1} from '../interfaces';
import {TOP_CAROUSEL_SIZES} from '../theme';
import {posterUrl} from '../utils';

type Props = {
  item: MovieType1;
  index: number;
  scrollXAnimated: Animated.Value;
};

const TopCarouselItem = ({item, index, scrollXAnimated}: Props) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [50, 0, -100],
  });
  const scale = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [0.8, 1, 1.3],
  });
  const opacity = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [1 - 1 / TOP_CAROUSEL_SIZES.VISIBLE_ITEMS, 1, 0],
  });

  return (
    <Animated.View
      style={[
        styles.singleItemContainer,
        {
          transform: [{translateX}, {scale}],
          opacity,
        },
      ]}>
      <Image
        source={{uri: posterUrl(item.poster, '300')}}
        style={styles.posterImage}
      />
    </Animated.View>
  );
};

export default TopCarouselItem;

const styles = StyleSheet.create({
  singleItemContainer: {
    position: 'absolute',
    left: -TOP_CAROUSEL_SIZES.ITEM_WIDTH / 2,
  },
  posterImage: {
    width: TOP_CAROUSEL_SIZES.ITEM_WIDTH,
    height: TOP_CAROUSEL_SIZES.ITEM_HEIGHT,
    borderRadius: 14,
  },
});
