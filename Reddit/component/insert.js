import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Insert extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.rendering}>
          <Text style={{ textAlign: "center" }}>{this.props.rend}</Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    fontWeight: "bold"
  },
  rendering: {
    flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  }
});
