import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export const BoxScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={style.container}>
      <Text style={style.title}>BoxScreen</Text>
      <Text>
        {" "}
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: { fontSize: 50, padding: 40 },
});
