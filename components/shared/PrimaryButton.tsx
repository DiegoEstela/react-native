import React from "react";
import { Pressable, Text } from "react-native";

interface PrimaryButtonProps {
  style?: any;
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({
  label,
  onPress,
  onLongPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      style={{ justifyContent: "center" }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text>{label}</Text>
    </Pressable>
  );
};
