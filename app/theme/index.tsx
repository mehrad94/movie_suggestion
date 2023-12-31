import {Dimensions} from 'react-native';
export const COLORS = {
  PRIMARY: '#15141F',
  SECONDARY: '#FF8F71',
  LIGHT: '#FFFFFF',
  PURPLE: '#211F30',
  WHITE: '#FFFFFF',
  GRAY_500: '#9E9E9E',
  GRAY_400: '#BDBDBD',
  GRAY_600: '#757575',
  SECONDARY_GRADIENT: '#EF2D1A',
  GRAY_TRANSPARENT: 'rgba(218, 218, 218, 0.2);',
  BLACK_TRANSPARENT: 'rgba(218, 218, 218, 0.6)',
};
export const RANDOM_COLOR = [
  '#070A52',
  '#D21312',
  '#2D033B',
  '#FF4C29',
  '#7B113A',
  '#30475E',
  '#413C69',
  '#293A80',
  '#C70D3A',
  '#5F1854',
  '#045757',
  '#470031',
  '#333F44',
  '#090030',
  '#5454C5',
  '#3D2E4F',
  '#321D2F',
  '#343434',
];

export const SIZES = {
  CAROUSEL_RATIO: 0.76,
  largeRadius: 30,
  mediumRadius: 20,
  smallRadius: 15,
  horizontalPadding: 24,
  verticalPadding: 36,
  padding: 20,
  paddingHalf: 10,
  bottomTabHeight: 70,
  small: 8,
  medium: 16,
  large: 24,
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  // Carousel
  SCALE: 0.7,
};

export const CAROUSEL_SIZE = {
  ITEM_WIDTH: SIZES.width * SIZES.SCALE,
  ITEM_HEIGHT: SIZES.height / 2,
};
export const TOP_CAROUSEL_SIZES = {
  OVERFLOW_HEIGHT: SIZES.height / 15,
  SPACING: 10,
  ITEM_WIDTH: SIZES.width * SIZES.CAROUSEL_RATIO,
  ITEM_HEIGHT: SIZES.width * SIZES.CAROUSEL_RATIO * 1.7,
  VISIBLE_ITEMS: 3,
};
export const FONTS = {
  h1: {
    fontSize: 24,
    fontFamily: 'ShantellSans-ExtraBoldItalic',
  },
  h2: {
    fontSize: 16,
    fontFamily: 'ShantellSans-Medium',
  },
  h3: {
    fontFamily: 'ShantellSans-Regular',
    fontSize: 12,
  },
  h4: {
    fontFamily: 'ShantellSans-Regular',
    fontSize: 10,
  },
};
