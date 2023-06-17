import Lottie from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZES} from '../theme';
import animations from '../assets/animations';

type Props = {};

const CustomLoading: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Lottie source={animations.anLoading} autoPlay />
    </View>
  );
};

export default CustomLoading;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.horizontalPadding,
    width: SIZES.width,
    height: SIZES.height / 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
