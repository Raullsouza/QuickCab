import React from "react";
import { View, Image, Text, StatusBar } from "react-native";
import introIMG from "../../assets/manTaxi.png";
import { ButtonIcon } from "../../components/Button/ButtonIcon";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image source={introIMG} resizeMode="stretch" />
        <Text style={styles.title}>
          Book a taxi, scooter or a {`\n`}
          bike within seconds
        </Text>

        <Text style={styles.subTitle}>
          The fastest app to book a taxi, {`\n`}
          scooter, or a bike online near by you
        </Text>

        <ButtonIcon title= "Give me a ride" activeOpacity={0.8}/>
    </View>
  );
}
