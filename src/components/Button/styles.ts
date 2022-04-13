import { StyleSheet } from "react-native";
import { theme } from "../../Globals/themes";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.color.primaryButton,
    width:334,
    height:65,
    borderRadius:100,
    justifyContent:"center",
    alignItems: "center",
    

  },
  title: {
    fontSize:24,
    color: theme.color.background,

  }
});