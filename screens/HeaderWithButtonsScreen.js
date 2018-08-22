import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

class HeaderWithButtonsScreen extends Component {
  // Title for navigation bar and Buttons for Header
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('otherHeaderTitle', 'Header with Buttons'),
      headerRight: (
        !!navigation.getParam('increaseCount')  // Only when componentDidMount has loaded the param
        && <Button onPress={navigation.getParam('increaseCount')}
                  title="+1"
                  color="#000" />
      )
    }
  }
  
  // Set the increaseCount function as param because navigationOptions does not live on
  // HeaderWithButtonsScreen's instance and therefore calling it directly will not allow us to setState
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }

  state = {
    count: 0
  }

  _increaseCount = () => {    
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    // const { getParam } = this.props.navigation
    // const count = getParam('count', 0)
    
    // Count to display for HeaderWithButtons component
    const { count } = this.state

    return (
      <View style={styles.container}>
        <Text>{count}</Text>
      </View>
    )
  }

}

export default HeaderWithButtonsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})