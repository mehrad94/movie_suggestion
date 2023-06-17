import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {CustomInput} from './app/components';
import {store} from './app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './app/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
