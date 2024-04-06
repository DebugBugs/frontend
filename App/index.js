import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";
import { Link } from "expo-router";

const LoginSignupPage = ({ navigation }) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/user.png")} />
      <View style={styles.subcontainer}>
        <Text style={styles.introtext}>Let's</Text>
        <Link href={"/home"}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center" }}>Let's get started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    padding: 50,
    marginTop: 70,
    alignSelf: "center",
  },
  subcontainer: {
    backgroundColor: Colors.PRIMARY,
    fontSize: 27,
    textAlign: "center",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default LoginSignupPage;
