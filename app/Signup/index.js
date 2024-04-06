import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../utils/Colors";
import { TextInput } from "react-native-web";
import { Link, router } from "expo-router";
import { useState } from "react";
import postSignup from "../../utils/postSignup";

export default Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = () => {
    // const res = postSignup(username, password);
    // if (res === "Username already taken") {
    // }
    router.replace("/Signup/appliances");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 30,
            fontSize: 30,
            marginBottom: 50,
            color: Colors.WHITE,
          }}
        >
          Create your account
        </Text>
        <Text style={{ width: 230, color: Colors.GREY }}>Username</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(u) => setUsername(u)}
        ></TextInput>
        <Text style={{ width: 230, color: Colors.GREY }}>Password</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(p) => setPassword(p)}
        ></TextInput>
        <Link style={{ marginTop: 10, marginBottom: 20 }} href={"/Login"}>
          <Text>Already have an account? Login!</Text>
        </Link>
        <TouchableOpacity onPress={handleSignup} style={styles.confirm}>
          <Text
            style={{
              width: 230,
              fontSize: 24,
              color: Colors.GREY,
              textAlign: "center",
              fontWeight: "800",
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
