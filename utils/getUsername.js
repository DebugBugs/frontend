import AsyncStorage from "@react-native-async-storage/async-storage";

const getUsername = async (setUsername) => {
  const user = await AsyncStorage.getItem("username");
  setUsername(user.replace(/['"]+/g, ""));
};

export default getUsername;
