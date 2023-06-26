import Lottie from 'lottie-react-native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import animations from '../assets/animations';
import {COLORS, FONTS, SIZES} from '../theme';

type Props = {};

const CustomLoading: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingHolder}>
        <Lottie source={animations.anLoading} autoPlay />
      </View>
      <Text style={styles.txtLoading}>{'Loading...'}</Text>
    </SafeAreaView>
  );
};

export default CustomLoading;

const styles = StyleSheet.create({
  txtLoading: {
    ...FONTS.h1,
    color: COLORS.WHITE,
  },
  loadingHolder: {
    width: SIZES.width,
    height: SIZES.height / 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  container: {
    backgroundColor: COLORS.PRIMARY,
    flex: 1,
    width: SIZES.width,
    height: SIZES.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
