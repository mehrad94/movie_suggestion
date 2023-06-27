import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {SIZES} from '../theme';

const ImdbLogo = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../assets/images/lg_imdb.png')}
      />
    </View>
  );
};

export default ImdbLogo;

const styles = StyleSheet.create({
  logo: {
    width: SIZES.width / 10,
    height: SIZES.width / 20,
    resizeMode: 'stretch',
  },
});
