import { PrimaryButton } from "@/components";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-paper";
import { globalStyles } from "../theme/global.styles";

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={styles.title}>{counter}</Text>

      <Button
        onPress={() => setCounter((prev) => prev + 1)}
        onLongPress={() => setCounter(0)}
        mode="contained"
      >
        Incrementar
      </Button>
      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: "black",
    fontWeight: 300,
  },
});
