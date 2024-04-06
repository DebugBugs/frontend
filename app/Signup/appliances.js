import { Link, router } from "expo-router";
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../utils/Colors";
import { useState } from "react";
import postAppliances from "../../utils/postAppliances";

export default Appliances = () => {
  const [aircon, setAircon] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [others, setOthers] = useState("");
  const handleAppliances = () => {
    // postAppliances(
    //   localStorage.getItem("username"),
    //   aircon,
    //   laundry,
    //   fridge,
    //   others
    // );
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
              width: 230,
            }}
          >
            List appliances you use!
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 30,
              paddingBottom: 10,
            }}
          >
            <Switch
              value={aircon}
              disabled={false}
              onValueChange={() => setAircon(!aircon)}
            />
            <Text style={{ width: 230, color: Colors.GREY, marginLeft: 12 }}>
              Aircon
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 30,
              paddingBottom: 10,
            }}
          >
            <Switch
              value={laundry}
              disabled={false}
              onValueChange={() => setLaundry(!laundry)}
            />
            <Text style={{ width: 230, color: Colors.GREY, marginLeft: 12 }}>
              Laundry Machine
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 30,
              paddingBottom: 10,
            }}
          >
            <Switch
              value={fridge}
              disabled={false}
              onValueChange={() => setFridge(!fridge)}
            />
            <Text style={{ width: 230, color: Colors.GREY, marginLeft: 12 }}>
              Fridge
            </Text>
          </View>
          <Text style={{ width: 230, color: Colors.GREY }}>Others</Text>
          <TextInput
            style={styles.textinput}
            onChangeText={(p) => setOthers(p)}
          ></TextInput>
          <TouchableOpacity onPress={handleAppliances} style={styles.confirm}>
            <Text
              style={{
                width: 230,
                fontSize: 24,
                color: Colors.GREY,
                textAlign: "center",
                fontWeight: 800,
              }}
            >
              Start Saving!
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
