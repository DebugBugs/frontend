import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../utils/Colors";
import { Link, router } from "expo-router";
import postLogin from "../../utils/postLogin";
import { useState } from "react";

export default Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const handleLogin = async () => {
    await postLogin(username, password, setIncorrect);

    router.navigate("/Dashboard");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 30,
              fontSize: 30,
              marginBottom: 20,
              fontWeight: "900",
              color: Colors.WHITE,
            }}
          >
            Login to your account
          </Text>
          <Text style={{ width: 230, color: Colors.GREY }}>Username</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(u) => setUsername(u)}
          ></TextInput>
          <Text
            style={{ width: 230, color: Colors.GREY }}
            onChangeText={(p) => setPassword(p)}
          >
            Password {incorrect && "incorrect!"}
          </Text>
          <TextInput style={styles.textinput}></TextInput>
          <TouchableOpacity
            style={{ marginTop: 10, marginBottom: 20 }}
            onPress={() => router.navigate("/Signup")}
          >
            <Text>Don't have an account? Signup!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.confirm}>
            <Text
              style={{
                width: 230,
                fontSize: 24,
                color: Colors.GREY,
                textAlign: "center",
                fontWeight: "800",
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    backgroundColor: Colors.SECONDARY,
    width: 300,
    height: 400,
    borderRadius: 30,
    alignItems: "center",
  },
  textinput: {
    marginBottom: 20,
    marginTop: 5,
    width: 230,
    height: 30,
    padding: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  confirm: {
    color: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 20,
  },
});
