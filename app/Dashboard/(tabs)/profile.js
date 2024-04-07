import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../../utils/Colors";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import getUsername from "../../../utils/getUsername";

const Statistics = () => {
  return (
    <View style={styles.stats}>
      <Text
        style={{
          textAlign: "left",
          width: 300,
          fontWeight: "800",
          fontSize: 24,
          color: Colors.SECONDARY,
        }}
      >
        Statistics
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: 300,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.statNumbers}>39kwH</Text>
          <Text
            style={{
              width: 100,
              textAlign: "center",
              color: Colors.SECONDARY,
            }}
          >
            Average Daily Usage
          </Text>
        </View>
        <View>
          <Text style={styles.statNumbers}>123</Text>
          <Text
            style={{
              width: 100,
              textAlign: "center",
              color: Colors.SECONDARY,
            }}
          >
            Challenges Completed
          </Text>
        </View>
        <View>
          <Text style={styles.statNumbers}>1yr 1mon</Text>
          <Text
            style={{
              width: 100,
              textAlign: "center",
              color: Colors.SECONDARY,
            }}
          >
            Member Since
          </Text>
        </View>
      </View>
    </View>
  );
};

const Goal = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../../../assets/lightbulb.png")}
      ></Image>
      <Text style={{ color: Colors.SECONDARY, fontWeight: "600" }}>
        {props.goaltext}
      </Text>
    </View>
  );
};

const Graph = () => {
  const chartConfig = {
    backgroundGradientFrom: "rgb(224, 242, 241)",
    backgroundGradientTo: "rgb(224, 242, 241)",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };
  const data = {
    labels: ["-7", "-6", "-5", "-4", "-3", "-2", "Yest.", "Today"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `${Colors.D_PRIMARY}`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Health"], // optional
  };

  return (
    <View style={styles.stats}>
      <Text
        style={{
          textAlign: "left",
          width: 300,
          fontWeight: "800",
          fontSize: 24,
          color: Colors.SECONDARY,
        }}
      >
        History
      </Text>
      <LineChart
        backgroundColor={Colors.PRIMARY}
        data={data}
        width={300}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const PastAchievements = () => {
  return (
    <View style={styles.stats}>
      <Text
        style={{
          textAlign: "left",
          width: 300,
          fontWeight: "800",
          fontSize: 24,
          color: Colors.SECONDARY,
        }}
      >
        Past Achievements
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
        }}
      >
        <Goal goaltext={"Reduced lightbulb usage"}></Goal>
        <Goal goaltext={"Reduce laundry machine usage"} />
      </View>
    </View>
  );
};

export default Profile = () => {
  const [username, setUsername] = useState("...");
  getUsername(setUsername);
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/user.png")}
        />
      </View>
      <Text style={styles.username}>{username}</Text>
      <Statistics />
      <PastAchievements />
      <Graph />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    alignItems: "center",
  },
  image: {
    marginTop: 60,
    width: 150,
    height: 150,
  },
  username: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 24,
  },

  goal: {},
  stats: {
    marginTop: 30,
    padding: 10,
    width: 340,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    alignItems: "center",
  },
  statNumbers: {
    marginTop: 20,
    fontWeight: "800",
    fontSize: 24,
    textAlign: "center",
    color: Colors.SECONDARY,
  },
});
