import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Animated } from "react-native"
import { PanGestureHandler, FlatList } from "react-native-gesture-handler"
import Item from './Item'



export default class App extends Component {
  renderItem = () => {
    return (
      <Animated.View style={{ flex: 1 }}>
        <Item />
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={Array(30).fill(2)}
          renderItem={this.renderItem}
          keyExtractor={(item, idx) => `${idx}`}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
})