import { PrimaryButton } from "@/components";
import React, { useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Button, FAB } from "react-native-paper";
import { globalStyles } from "../theme/global.styles";

import Icon from "react-native-vector-icons/Ionicons";

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={styles.title}>{counter}</Text>

      <FAB
        icon="add-outline"
        style={globalStyles.fab}
        onPress={() => setCounter((prev) => prev + 1)}
        onLongPress={() => setCounter(0)}
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
