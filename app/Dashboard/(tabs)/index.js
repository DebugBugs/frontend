import { View, StyleSheet, ScrollView } from "react-native";
import CardView from "../../../components/CardView";
import HealthContainer from "../../../components/HealthContainer";
import GemContainer from "../../../components/GemContainer";
import { LineChart } from "react-native-chart-kit";
import Colors from "../../../utils/Colors";
import NavBar from "../../../components/NavBar";
import getUsername from "../../../utils/getUsername";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";

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

const initalGoals = [
  { id: 1, goal: "Switch to energy-efficient LED light bulbs" },
  { id: 2, goal: "Use natural lighting whenever possible" },
  { id: 3, goal: "Unplug electronics when not in use" },
  { id: 4, goal: "Install a programmable thermostat" },
  { id: 5, goal: "Seal gaps and cracks in doors and windows" },
  { id: 6, goal: "Use energy-efficient appliances" },
  { id: 7, goal: "Turn off lights and fans when leaving a room" },
  { id: 8, goal: "Wash clothes in cold water" },
  { id: 9, goal: "Air dry clothes instead of using a dryer" },
  { id: 10, goal: "Use power strips to easily turn off multiple devices" },
  { id: 11, goal: "Cook with lids on pots and pans to retain heat" },
  { id: 12, goal: "Use microwave or toaster oven for small cooking tasks" },
  { id: 13, goal: "Keep refrigerator coils clean and well-maintained" },
  { id: 14, goal: "Lower the thermostat on your water heater" },
  { id: 15, goal: "Plant shade trees around your home" },
  { id: 16, goal: "Use a ceiling fan to circulate air efficiently" },
  { id: 17, goal: "Take shorter showers to reduce water heating energy" },
  { id: 18, goal: "Use energy-saving modes on electronics and appliances" },
  { id: 19, goal: "Opt for energy-efficient windows and doors" },
];

const Home = (props) => {
  // const userName = String(props.username)
  // const Health = String(props.Health)
  // const Gems = String(props.Gems)

  const [userName, setUsername] = useState("...");
  getUsername(setUsername);
  const profileImg = "./assets/user.png";
  const Health = 99;
  const Gems = 1000;
  const [goals, setGoals] = useState(initalGoals);
  getGoals(setGoals);

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

        <CardView title="Goals">
          {goals.map(id, (goal) => (
            <View style={styles.goalItem}>
              <TouchableOpacity
                style={styles.goalCompleteBtn}
                onPress={() => {
                  setGoals(goals.filter((a) => a.id !== goal.id));
                }}
              ></TouchableOpacity>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </CardView>

        <CardView title={"Energy Usage"}>
          <Graph style={{ width: "100%" }} />
        </CardView>

        <CardView title="Featured Items"></CardView>
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
