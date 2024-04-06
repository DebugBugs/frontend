import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../utils/Colors";

export default function HealthContainer(props) {
  var healthPercent = props.Health + "%";
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/heart.png")}
        style={{ height: 20, width: 20 }}
      ></Image>
      <View style={[styles.healthBar]}>
        <Text
          style={{
            position: "absolute",
            top: 0,
            right: 55,
            zIndex: 99,
            color: "#fff",
          }}
        >
          {props.Health}%
        </Text>
        <View
          style={[styles.currentHealth, { width: props.Health + "%" }]}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  healthBar: {
    width: "80%",
    backgroundColor: Colors.D_PRIMARY,
    height: 15,
    borderRadius: 7,
    position: "relative",
  },
  currentHealth: {
    backgroundColor: Colors.D_GREEN,
    height: 15,
    borderRadius: 7,
  },
});