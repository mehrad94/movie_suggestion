import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../theme';

interface ProgressBarProps {
  progress: number;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress, duration}) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration,
      useNativeDriver: false,
    }).start();
  }, [progress, duration, progressAnim]);

  const barWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, {width: barWidth}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.height / 30,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: COLORS.SECONDARY,
  },
});

export default ProgressBar;
