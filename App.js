import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is </Text>
      <Text style={styles.name}>Josiah</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0a1620",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: "#1b81e2",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
 
  
});
