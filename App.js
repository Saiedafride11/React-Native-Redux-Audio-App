import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux';
import store from './store';
import Text from './src/components/text/text';
import Navigation from './navigation/index';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);


export default function App() {
  const [fontLoaded] = useFonts({
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
  });
  if (!fontLoaded) {
    return null;
  } else{
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <Navigation/>
              <StatusBar/>
              <FlashMessage
                position="top"
                floating
                statusBarHeight={30}
              />
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
    );
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
