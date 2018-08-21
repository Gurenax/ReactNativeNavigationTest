/**
 * React Navigation for React Native App
 * https://github.com/Gurenax/ReactNativeNavigationTest
 *
 * @format
 * @flow
 */
import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation'
// Other Screens
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

class App extends Component {
  render() {
    return <RootStack />
  }
}

export default App