import React from "react";
import { View, Image, Text, StatusBar } from "react-native";
import introIMG from "../assets/manTaxi.png";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={introIMG} 
      resizeMode="stretch"
      />
      <View>
        <Text style={styles.title}> 
          Book taxi, scooter or a {`\n`}
          bike within seconds
        </Text>
      </View>
      <View >
        <Text style={styles.subTitle}>
          The fastest app to book a taxi, {`\n`}
          scooter, or a bike online near by you
        </Text>
      </View>
    </View>
  );
}
