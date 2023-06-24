import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES} from '../theme';

interface Props {
  onClick: () => void;
}
const CustomError: React.FC<Props> = ({onClick}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Something went wrong!!!! </Text>
      <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
        <Text style={styles.btnText}>{'Try Again...'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomError;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    padding: SIZES.small,
    marginTop: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.SECONDARY,
    width: '50%',
  },
  txtTitle: {
    ...FONTS.h2,
    color: COLORS.WHITE,
  },
  btnText: {
    color: COLORS.WHITE,
    ...FONTS.h2,
  },
});
