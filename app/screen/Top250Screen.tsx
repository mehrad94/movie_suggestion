import * as React from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {TopCarouselItem, TopHeader} from '../components';
import {MovieType1} from '../interfaces';
import {RootState} from '../redux/store';
import {COLORS, FONTS, TOP_CAROUSEL_SIZES} from '../theme';

export default function Top250Screen() {
  const topMovie: MovieType1[] = useSelector(
    (state: RootState) => state.movies.top250MovieStore,
  );

  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const [data, setData] = React.useState(topMovie.slice(0, 12));
  const setActiveIndex = React.useCallback(
    (activeIndex: any) => {
      scrollXIndex.setValue(activeIndex);
      setIndex(activeIndex);
    },
    [scrollXIndex],
  );

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  const cellComponentRender: React.ComponentType<any> = info => {
    const {children, style, ...props} = info;
    const newStyle = [style, {zIndex: data.length - info.index}];
    return (
      <View style={newStyle} index={info.index} {...props}>
        {children}
      </View>
    );
  };

  React.useEffect(() => {
    if (index === 0) {
      setData(topMovie.slice(0, 12));
    }
    if (index % 10 === 0 && index !== 0) {
      let newData = [...data];
      newData.push(...topMovie.slice(data.length, data.length + 10));
      setData(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END && index !== data.length - 1) {
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END && index !== 0) {
            setActiveIndex(index - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <Text style={styles.title}>{'Top 250 Movie'}</Text>
          <FlatList
            data={data}
            keyExtractor={(_, _index) => String(_index)}
            horizontal
            contentContainerStyle={styles.flatListContainer}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={cellComponentRender}
            renderItem={itemInfo => (
              <TopCarouselItem
                index={itemInfo.index}
                item={itemInfo.item}
                scrollXAnimated={scrollXAnimated}
              />
            )}
          />
          <TopHeader data={data} scrollXAnimated={scrollXAnimated} />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  title: {
    ...FONTS.h1,
    textAlign: 'center',
    color: COLORS.WHITE,
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: TOP_CAROUSEL_SIZES.SPACING * 2,
    marginTop: 50,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
});
