import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import homeIcon from "../assets/home.png";
import mapIcon from "../assets/map.png";
import shoppingBagIcon from "../assets/shoppingBag.png";
import userIcon from "../assets/user.png";

export default function NavBar(props) {
  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.navBarBackground} testID="12:125" />
      <TouchableOpacity onPress={() => console.log("hi home")}>
        <Image source={homeIcon} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("hi map")}>
        <Image source={mapIcon} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("hi shop")}>
        <Image
          source={shoppingBagIcon}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("hi user")}>
        <Image source={userIcon} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-around", // Evenly distribute space between icons
    alignItems: "center", // Center items vertically
    width: "100%", // Take full width of the screen
    height: 53, // Height of the navbar
    position: "absolute", // Position over the content
    bottom: 0, // Align to the bottom of the screen
    backgroundColor: "rgba(240, 240, 240, 1)", // Background color of the navbar
  },
  navBarBackground: {
    ...StyleSheet.absoluteFillObject, // Stretch to fill parent
    backgroundColor: "rgba(240, 240, 240, 1)", // Background color
  },
  icon: {
    width: 25, // Width of the icon
    height: 25, // Height of the icon
  },
});
