import React from "react";
import styles from "./style";
import { View, Pressable, Text } from "react-native";

export default function StyledButton({ type, title, onPress }) {
  const backgroundColor = type === "primary" ? "#171a28cc" : "white";
  const textColor = type === "primary" ? "white" : "black";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, {color: textColor}]}>{title}</Text>
      </Pressable>
    </View>
  );
}
