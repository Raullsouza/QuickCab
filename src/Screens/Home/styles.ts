import { StyleSheet } from "react-native";
import { theme } from "../../Globals/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center", 
    backgroundColor: theme.color.background,
  },
 
  title: {
    marginTop:56,
    fontSize:24,
    textAlign: "center"
  },

  subTitle: {
    marginTop:16,
    marginBottom:117,
    color:theme.color.grayLight,
    fontSize:18,
    textAlign: "center",

  }
})