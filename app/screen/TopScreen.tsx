import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {COLORS} from '../theme';

const TopScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{'Salam'}</Text>
    </SafeAreaView>
  );
};

export default TopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});
