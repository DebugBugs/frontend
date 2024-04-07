import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect } from "react";
import CardView from "../../../components/CardView";
import HealthContainer from "../../../components/HealthContainer";
import GemContainer from "../../../components/GemContainer";
import { LineChart } from "react-native-chart-kit";
import Colors from "../../../utils/Colors";
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
        color: () => Colors.D_PRIMARY, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Health"], // optional
  };

  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <LineChart
        backgroundColor={Colors.PRIMARY}
        data={data}
        width={Dimensions.get("window").width - 27}
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
];

const Home = (props) => {
  // const userName = String(props.username)
  // const Health = String(props.Health)
  // const Gems = String(props.Gems)

  const [userName, setUsername] = useState("...");
  // getUsername(setUsername);
  const profileImg = "./assets/user.png";
  const [goals, setGoals] = useState([]);
  const [Health, setHealth] = useState(99);
  const [Gems, setGems] = useState(99);
  const [goalsLoading, setGoalsLoading] = useState(false);
  getUser(setHealth, setGems);

  useEffect(() => {
    goals.length > 0 && setGoalsLoading(false);
  }, [goals]);

  return (
    <ScrollView>
      <View style={styles.homeContainer}>
        <CardView title={"Welcome " + userName}>
          <HealthContainer Health={Health} />
          <GemContainer Gems={Gems} />
        </CardView>

        <CardView title="Goals">
          <TouchableOpacity
            onPress={async () => {
              // setGoalsLoading(true);
              // const goalsArr = await getGoals();
              // const newGoalsArr =
              //   goalsArr.length > 0
              //     ? goalsArr.map((g, i) => {
              //         return { goal: g, id: goals.length + i + 1 };
              //       })
              //     : setGoalsLoading(false);
              // console.log("newGoalsArr", newGoalsArr);
              // setGoals((prev) => prev.concat(newGoalsArr));
              setGoals(initalGoals);
            }}
            disabled={goalsLoading}
          >
            <Text>Add More Goals {goalsLoading && "Loading..."}</Text>
          </TouchableOpacity>
          {goals.length > 0 ? (
            goals.map((goal) => (
              <View style={styles.goalItem} key={goal.id}>
                <Text style={styles.goalText}>{goal.goal}</Text>
                <TouchableOpacity
                  style={styles.goalCompleteBtn}
                  onPress={() => {
                    setGoals(goals.filter((a) => a.id !== goal.id));
                  }}
                >
                  <Image
                    source={require("../../../assets/cross.png")}
                    style={styles.goalDelete}
                  />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style>No Goal yet!</Text>
          )}
        </CardView>

        <CardView title={"Energy Usage"}>
          <Graph style={{ width: "100%" }} />
        </CardView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    padding: 15,
  },
  goalItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalCompleteBtn: {},
  goalText: {
    width: "90%",
  },
  goalDelete: {
    width: 20,
    height: 20,
  },
});

export default Home;
