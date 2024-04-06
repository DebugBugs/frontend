import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CardView from "./components/CardView";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <CardView />
      <NavBar testID="test_id" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
