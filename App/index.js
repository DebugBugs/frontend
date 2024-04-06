import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";
import { Link } from "expo-router";

const LoginSignupPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require("../assets/batteries.png")}
        />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.introtext}>
          Battle with your neighbours to{" "}
          <Text style={{ fontWeight: 700 }}>conserve the most energy!</Text>
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 30, color: Colors.GREY }}>
          Ready to claim your victory in Viridis?
        </Text>
        <Link href={"/home"} style={styles.button}>
          <Pressable>
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              Let's get started
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  imagecontainer: {
    padding: 50,
  },
  introtext: {
    fontSize: 30,
    fontWeight: 400,
    color: Colors.GREY,
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 70,
    alignSelf: "center",
  },
  subcontainer: {
    backgroundColor: Colors.PRIMARY,
    fontSize: 27,
    textAlign: "center",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    alignItems: "center",
  },
  button: {
    borderRadius: 50,
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default LoginSignupPage;
