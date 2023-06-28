import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {MovieType1} from '../interfaces';
import {COLORS, FONTS, SIZES, TOP_CAROUSEL_SIZES} from '../theme';
import ImdbLogo from './ImdbLogo';

type Props = {
  scrollXAnimated: Animated.Value;
  data: MovieType1[];
};

const TopHeader: React.FC<Props> = ({data, scrollXAnimated}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [
      TOP_CAROUSEL_SIZES.OVERFLOW_HEIGHT,
      0,
      -TOP_CAROUSEL_SIZES.OVERFLOW_HEIGHT,
    ],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                {height: TOP_CAROUSEL_SIZES.OVERFLOW_HEIGHT},
                styles.itemContainer,
              ]}>
              <Text
                style={{...FONTS.h1, color: COLORS.WHITE}}
                numberOfLines={1}>
                {`${index + 1}) ${item.title}`}
              </Text>
              <View style={styles.infoHolder}>
                <ImdbLogo />
                <Text style={styles.txtRating} numberOfLines={1}>
                  {item.rating} ({item.year})
                </Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  txtRating: {
    marginLeft: SIZES.medium,
    ...FONTS.h2,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  infoHolder: {
    flexDirection: 'row',
  },
  overflowContainer: {
    height: TOP_CAROUSEL_SIZES.OVERFLOW_HEIGHT,
    overflow: 'hidden',
    marginBottom: 20,
  },
  itemContainer: {
    paddingVertical: SIZES.small,
    height: TOP_CAROUSEL_SIZES.OVERFLOW_HEIGHT,
    padding: TOP_CAROUSEL_SIZES.SPACING * 2,
  },
});
