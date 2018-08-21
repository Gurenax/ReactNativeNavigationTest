import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class DetailsScreen extends Component {
  render() {
    const { push, navigate, goBack, popToTop } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details..again"
          onPress={() => push('Details')}/>
        <Button
          title="Go to Home"
          onPress={() => navigate('Home')}/>
        <Button
          title="Go back"
          onPress={() => goBack()}/>
        <Button
          title="Go back to Top Screen"
          onPress={() => popToTop()}/>
      </View>
    )
  }
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})