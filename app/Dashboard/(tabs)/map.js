import { Text, View, StyleSheet, Image } from "react-native";
import { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Colors from "../../../utils/Colors";
import TopBar from "../../../components/TopBar";
import getUsername from "../../../utils/getUsername";

export default LeaderBoard = () => {
  const [userName, setUsername] = useState("...");
  getUsername(setUsername);
  return (
    <View>
      <TopBar userName="user" health="99" gem="99999" />
      <Text style={styles.title}>Map</Text>
      <MapView
        style={{ width: "100%", height: "80%" }}
        initialRegion={{
          latitude: 1.370149,
          longitude: 103.805337,
          latitudeDelta: 0.2,
          longitudeDelta: 0.3,
        }}
      >
        <Marker
          coordinate={{
            latitude: userCoordinate.lat,
            longitude: userCoordinate.long,
          }}
          title={userName}
          description={"This is a description of the marker"}
        >
          <Image source={require("../../../assets/userPin.png")} />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    marginBottom: 20,
    color: Colors.D_PRIMARY,
    fontWeight: "900",
  },
});

const userCoordinate = {
  lat: 1.2819271,
  long: 103.8488143,
};
