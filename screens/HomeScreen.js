import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class HomeScreen extends Component {
  // Title for navigation bar
  static navigationOptions = {
    title: 'Home',
  }

  render() {

    const navigate = this.props.navigation.navigate
    
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Details'
          onPress={() => navigate('Details')} />

        <Button
          title='Go to Header with Buttons'
          onPress={() => navigate('HeaderWithButtons')} />
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
