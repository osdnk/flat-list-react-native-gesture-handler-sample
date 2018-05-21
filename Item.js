import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, Animated } from "react-native"
import { PanGestureHandler, FlatList } from "react-native-gesture-handler"




export default class Item extends Component {
  constructor() {
    super()
    this.state = {
      translateX: new Animated.Value(0),
    }
  }

  onTranslate = event =>
    Animated.event([{ nativeEvent: { translationX: this.state.translateX } }])(
      event,
    )

  render() {
    return (
      <PanGestureHandler minDeltaX={5} onGestureEvent={this.onTranslate}>
        <Animated.View
          style={{
            transform: [{ translateX: this.state.translateX }],
          }}
        >
          <Text style={styles.welcome}>Hello world</Text>
        </Animated.View>
      </PanGestureHandler>
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