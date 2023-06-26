import React from 'react';
import {iconNameGenerator} from '../utils';
import {COLORS, SIZES} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

interface Props {
  screenName: string;
  focused: boolean;
}
const BottomTabIcon: React.FC<Props> = ({screenName, focused}) => {
  if (focused) {
    return (
      <LinearGradient
        start={{x: -0.5, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.SECONDARY_GRADIENT, COLORS.SECONDARY]}
        style={styles.iconFocused}>
        <Icon
          name={iconNameGenerator(screenName)}
          size={20}
          color={COLORS.WHITE}
        />
      </LinearGradient>
    );
  } else {
    return (
      <Icon
        name={iconNameGenerator(screenName)}
        size={20}
        color={'rgba(218, 218, 218, 0.2)'}
      />
    );
  }
};

export default BottomTabIcon;

const styles = StyleSheet.create({
  iconFocused: {
    width: SIZES.bottomTabHeight / 1.5,
    marginBottom: 16,
    height: SIZES.bottomTabHeight / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
  },
});
