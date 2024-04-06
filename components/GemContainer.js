import { View, Text, StyleSheet, Image } from "react-native";

export default function GemContainer(props) {
  var gemCount = String(props.Gems);
  return (
    <View style={styles.gemContainer}>
      <Image style={styles.gemIcon} source={require("../assets/diamond.png")} />
      <Text style={styles.gemValue}>{gemCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gemContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gemIcon: {
    height: 20,
    width: 20,
  },
  gemValue: {
    color: "#45B3B0",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 15,
  },
});
