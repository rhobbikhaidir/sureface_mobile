import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import { isReadyRef, navigationRef } from 'react-navigation-helpers'
import React from 'react'
// import linking from '../modules/linkin'
// import { LightTheme } from 'modules/themes'
// import { SCREENS } from 'modules/screens'
import SplashScreen from '../screens/splash/SplashScreen'
import { LightTheme } from '../modules/themes'
import linking from '../modules/linkin' 
// onst Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer
      // linking={linking}
      // ref={navigationRef}
      // onReady={() => {
      //   isReadyRef.current = true
      // }}
      // theme={LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"splash"} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
