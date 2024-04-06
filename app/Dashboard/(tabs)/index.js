import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import CardView from "../../../components/CardView";
import HealthContainer from "../../../components/HealthContainer";
import GemContainer from "../../../components/GemContainer";
import { LineChart } from "react-native-chart-kit";
import Colors from "../../../utils/Colors";
import NavBar from "../../../components/NavBar";
import getUsername from "../../../utils/getUsername";
import { useState } from "react";
import getUser from "../../../utils/getUser";
import getGoals from "../../../utils/getGoals";

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
        color: (opacity = 1) => `rgba(217, 57, 43, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Health"], // optional
  };

  return (
    <View style={{ alignItems: "center" }}>
      <LineChart
        backgroundColor={Colors.PRIMARY}
        data={data}
        width={600}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const Home = (props) => {
  // const userName = String(props.username)
  // const Health = String(props.Health)
  // const Gems = String(props.Gems)

  const [userName, setUsername] = useState("...");
  getUsername(setUsername);
  const profileImg = "./assets/user.png";
  const [Goals, setGoals] = useState([]);
  const [Health, setHealth] = useState(99);
  const [Gems, setGems] = useState(1000);
  getUser(setHealth, setGems);
  const leaderboard = [
    {
      userName: "Name1",
      id: 1,
      imgUri: "",
      health: 98,
      diamond: 999,
      score: 9999,
    },

    {
      userName: "Name2",
      id: 2,
      imgUri: "",
      health: 90,
      diamond: 92,
      score: 9989,
    },

    {
      userName: "Name3",
      id: 3,
      imgUri: "",
      health: 82,
      diamond: 98,
      score: 9983,
    },
  ];

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <CardView title={"Welcome " + userName}>
          <HealthContainer Health={Health}></HealthContainer>
          <GemContainer Gems={Gems}></GemContainer>
        </CardView>

        <CardView title={"Leaderboard"}></CardView>

        <CardView title={"Energy Usage"}>
          <Graph style={{ width: "100%" }} />
        </CardView>

        <CardView title="Featured Items"></CardView>
        <TouchableOpacity onPress={getGoals}>
          <Text style={{ width: 500 }}>Hello</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    padding: 15,
  },
});

export default Home;
