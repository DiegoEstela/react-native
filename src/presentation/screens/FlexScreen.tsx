import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  box1: {
    flex: 1,
    backgroundColor: "#5856D6",
  },
  box2: { flex: 2, backgroundColor: "#3c3a96" },
  box3: { flex: 3, backgroundColor: "#292864" },
});
