import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

class DetailsScreen extends Component {
  render() {
    const styles = this.props.styles
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    )
  }
}

export default DetailsScreen