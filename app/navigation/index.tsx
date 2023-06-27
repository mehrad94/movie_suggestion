import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTabIcon from '../components/BottomTabIcon';
import {IRootBottomTabParams, IRootStackParamList} from '../interfaces';
import {
  HomeScreen,
  MovieScreen,
  SearchScreen,
  SplashScreen,
  Top250Screen,
} from '../screen';
import {COLORS} from '../theme';
import {
  BOTTOM_TAB_STACK,
  SCREEN_HOME,
  SCREEN_MOVIE,
  SCREEN_SEARCH,
  SCREEN_SPLASH,
  SCREEN_TOP,
} from '../values/constants';

const Tab = createBottomTabNavigator<IRootBottomTabParams>();
const RootStack = createStackNavigator<IRootStackParamList>();

const BottomNavigation = () => {
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
        tabBarIcon: ({focused}) => (
          <BottomTabIcon screenName={route.name} focused={focused} />
        ),
      })}>
      <Tab.Screen name={SCREEN_HOME} component={HomeScreen} />
      <Tab.Screen name={SCREEN_SEARCH} component={SearchScreen} />
      <Tab.Screen name={SCREEN_TOP} component={Top250Screen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName={SCREEN_SPLASH}>
      <RootStack.Screen
        name={SCREEN_SPLASH}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name={SCREEN_MOVIE}
        component={MovieScreen}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name={BOTTOM_TAB_STACK}
        component={BottomNavigation}
      />
    </RootStack.Navigator>
  );
};

export default Navigation;
