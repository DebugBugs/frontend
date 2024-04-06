import { View, Text, StyleSheet, Image } from "react-native";
import GemContainer from "./GemContainer";
import HealthContainer from "./HealthContainer";
import Colors from "../utils/Colors";

export default function TopBar(props) {
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.container}>
        <View style={styles.userStatContainer}>
          <HealthContainer Health={props.health} />
          <GemContainer Gems={props.gem} />
        </View>
        <Image
          source={require("../assets/user.png")}
          style={styles.userProfile}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.D_SECONDARY,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userStatContainer: {
    width: "60%",
    display: "flex",
    gap: 5,
  },
  userProfile: {
    width: 50,
    height: 50,
  },
});