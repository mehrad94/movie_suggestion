import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../theme';

interface Props {
  onBack?: () => void;
}
const BackIcon: React.FC<Props> = ({onBack}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (onBack) {
          onBack();
        }
      }}>
      <Icon
        name={'chevron-left'}
        size={SIZES.width / 15}
        color={COLORS.WHITE}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SIZES.height / 25,
    left: SIZES.height / 50,
  },
});
