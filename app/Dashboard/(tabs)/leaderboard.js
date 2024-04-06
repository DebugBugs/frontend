import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Colors from "../../../utils/Colors";
import HealthContainer from "../../../components/HealthContainer";
import GemContainer from "../../../components/GemContainer";
import TopBar from "../../../components/TopBar";

export default LeaderBoard = () => {
  return (
    <ScrollView>
      <View>
        <TopBar userName="user" health="99" gem="99999" />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Leader Board</Text>

        {leaderBoard}
      </View>
    </ScrollView>
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
  container: {
    padding: 15,
    flex: "column",
    gap: 15,
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.D_SECONDARY,
    borderRadius: 20,
    padding: 20,
  },
  userStatContainer: {
    width: "60%",
    display: "flex",
    gap: 5,
  },
  firstUser: {
    height: 135,
    width: "100%",
  },
  secondUser: {
    height: 120,
    width: "100%",
  },
  thirdUser: {
    height: 110,
    width: "100%",
  },
  allUser: {
    height: 90,
    width: "100%",
  },
  userProfile: {
    height: 30,
    width: 30,
  },
  userProfileFirst: {
    height: 60,
    width: 60,
  },
  userProfileSecond: {
    height: 50,
    width: 50,
  },
  userProfileThird: {
    height: 40,
    width: 40,
  },
  badge: {
    borderRadius: "100%",
    height: 20,
    width: 20,
    position: "absolute",
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: -7,
    left: -7,
  },
});

const users = [
  {
    userName: "Name1",
    id: 1,
    imgUri: "",
    health: 60,
    gem: 999,
    score: 9999,
  },
  {
    userName: "Name2",
    id: 2,
    imgUri: "",
    health: 60,
    gem: 999,
    score: 9999,
  },
  {
    userName: "Name3",
    id: 3,
    imgUri: "",
    health: 60,
    gem: 999,
    score: 9999,
  },
  {
    userName: "Name4",
    id: 4,
    imgUri: "",
    health: 98,
    gem: 999,
    score: 9999,
  },
  {
    userName: "Name5",
    id: 5,
    imgUri: "",
    health: 98,
    gem: 999,
    score: 9999,
  },
  {
    userName: "Name6",
    id: 6,
    imgUri: "",
    health: 98,
    gem: 999,
    score: 9999,
  },
];

const leaderBoard = users.map((user, i) => {
  if (i === 0) {
    return (
      <View style={[styles.firstUser, styles.userContainer]} key={user.id}>
        <View style={styles.userStatContainer}>
          <Text style={{ color: Colors.D_PRIMARY }}>{user.userName}</Text>
          <HealthContainer Health={user.health} />
          <GemContainer Gems={user.gem} />
        </View>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.userProfileFirst}
          />
          <View
            style={[
              styles.badge,
              {
                backgroundColor: "#FFD700",
                height: 25,
                width: 25,
              },
            ]}
          >
            <Text>{i + 1}</Text>
          </View>
        </View>
      </View>
    );
  } else if (i === 1) {
    return (
      <View style={[styles.secondUser, styles.userContainer]} key={user.id}>
        <View style={styles.userStatContainer}>
          <Text style={{ color: Colors.D_PRIMARY }}>{user.userName}</Text>
          <HealthContainer Health={user.health} />
          <GemContainer Gems={user.gem} />
        </View>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.userProfileSecond}
          />
          <View
            style={[
              styles.badge,
              { backgroundColor: "#C0C0C0", height: 22.5, width: 22.5 },
            ]}
          >
            <Text>{i + 1}</Text>
          </View>
        </View>
      </View>
    );
  } else if (i === 2) {
    return (
      <View style={[styles.thirdUser, styles.userContainer]} key={user.id}>
        <View style={styles.userStatContainer}>
          <Text style={{ color: Colors.D_PRIMARY }}>{user.userName}</Text>
          <HealthContainer Health={user.health} />
          <GemContainer Gems={user.gem} />
        </View>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.userProfileThird}
          />
          <View
            style={[
              styles.badge,
              { backgroundColor: "#CD7F32", height: 20, width: 20 },
            ]}
          >
            <Text>{i + 1}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.allUser, styles.userContainer]} key={user.id}>
        <View style={styles.userStatContainer}>
          <Text style={{ color: Colors.D_PRIMARY }}>{user.userName}</Text>
          <HealthContainer Health={user.health} />
          <GemContainer Gems={user.gem} />
        </View>
        <View>
          <Image
            source={require("../../../assets/user.png")}
            style={styles.userProfile}
          />
        </View>
      </View>
    );
  }
});
