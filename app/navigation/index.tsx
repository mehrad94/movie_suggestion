import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {HomeScreen, SearchScreen, TopScreen} from '../screen';
import {COLORS, SIZES} from '../theme';
import {
  SCREEN_HOME,
  SCREEN_NEWS,
  SCREEN_SEARCH,
  SCREEN_TOP,
} from '../values/constants';

const Tab = createBottomTabNavigator();

const BottomIcon = ({screenName, focused}: any) => {
  return (
    <Icon
      name={iconNameGenerator(screenName)}
      size={20}
      color={focused ? 'rgba(218, 218, 218, 0.2)' : COLORS.WHITE}
    />
  );
};
const FocusedBottomIcon = ({screenName}: any) => {
  return (
    <LinearGradient
      start={{x: -0.5, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.SECONDARY_GRADIENT, COLORS.SECONDARY]}
      style={styles.iconFocused}>
      <BottomIcon screenName={screenName} />
    </LinearGradient>
  );
};

function iconNameGenerator(screenName: string) {
  switch (screenName) {
    case SCREEN_HOME:
      return 'home';
    case SCREEN_SEARCH:
      return 'search';
    case SCREEN_NEWS:
      return 'newspaper';
    case SCREEN_TOP:
      return 'trophy';
    default:
      return 'home';
  }
}
const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_HOME}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.PRIMARY,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          return focused ? (
            <FocusedBottomIcon screenName={route.name} />
          ) : (
            <BottomIcon screenName={route.name} focused />
          );
        },
      })}>
      <Tab.Screen name={SCREEN_HOME} component={HomeScreen} />
      <Tab.Screen name={SCREEN_SEARCH} component={SearchScreen} />
      <Tab.Screen name={SCREEN_TOP} component={TopScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;

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
