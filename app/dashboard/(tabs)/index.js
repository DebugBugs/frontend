import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Colors from "../../../utils/Colors";

const App = () => {
  return (
    <SafeAreaView style={{ marginTop: 30, paddingHorizontal: 10 }}>
      <ScrollView style={{}}>
        <View style={styles.subcontainer}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            aliquam reprehenderit? Error sint assumenda nemo repellat earum.
            Facilis omnis nisi consequatur incidunt deleniti sapiente debitis
            placeat aliquid? Illum, repellendus odit?
          </Text>
        </View>
        <View style={styles.subcontainer1}>
          <Text>2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    backgroundColor: Colors.PRIMARY,
    display: "flex",
    alignItems: "center",
    fontSize: 27,
    textAlign: "center",
    justifyContent: "center",
    height: 300,
    width: "100%",
    borderRadius: 30,
    padding: 30,
    marginTop: 30,
  },
  subcontainer1: {
    backgroundColor: Colors.PRIMARY,
    display: "flex",
    alignItems: "center",
    fontSize: 27,
    textAlign: "center",
    justifyContent: "center",
    height: 500,
    width: "100%",
    borderRadius: 30,
    padding: 30,
    marginTop: 30,
  },
});

export default App;
