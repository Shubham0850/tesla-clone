import React from "react";
import styles from "./style";
import carsArr from "./cars";
import { Dimensions, FlatList, Text, View } from "react-native";
import CarItem from "../CarItem";

export default function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={carsArr}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagLine={item.tagLine}
            tagLineCTA={item.tagLineCTA}
            image={item.image}
            memeImage={item.memeImage}
          />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
}
