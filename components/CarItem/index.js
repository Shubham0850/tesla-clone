import React from "react";
import styles from "./style";
import { View, Text, ImageBackground, Image } from "react-native";
import StyledButton from "../StyledButton";

export default function CarItem({ name, tagLine, image, tagLineCTA }) {
  
  return (
    <View style={styles.carContainer}>

      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          title={"Custom order"}
          type={"primary"}
          onPress={() => {
            console.warn("black btn pressed");
          }}
        />
        <StyledButton
          title={"existing Inventory "}
          type={"secondary"}
          onPress={() => {
            console.warn("white btn pressed");
          }}
        />
      </View>
    </View>
  );
}
