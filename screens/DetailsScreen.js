import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

class DetailsScreen extends Component {
  // Title for navigation bar
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    const { push, navigate, goBack, popToTop, getParam, setParams } = this.props.navigation
    const message = getParam('message', 'Default Message')

    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>Message: {message}</Text>
        <Button
          title="Go to Details..again"
          onPress={() => push('Details')}/>

        <Button
          title="Go to Details with a Hello message"
          onPress={() => push('Details', {
            message: 'Hello World!'
          })}/>

        <Button
          title="Go to Details with a Hi message"
          onPress={() => push('Details', {
            message: 'Hi World!'
          })}/>
        
        <Button
          title="Update message to Cheers!"
          onPress={() => setParams({message: 'Cheers!'})}/>

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