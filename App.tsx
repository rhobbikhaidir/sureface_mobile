/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { Platform, useColorScheme } from 'react-native'
import Navigation from './src/navigation/Navigation'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './src/store/store'
import SplashScreen from './src/screens/splash/SplashScreen'

const persistor = persistStore(store)

const App = () => {
  const ios = Platform.OS === 'ios'
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
       {/* <Navigation />  */}
      {/* <SplashScreen /> */}
    </>
  )
}

export default App
