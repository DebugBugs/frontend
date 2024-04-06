import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_NAME } from "../config";

export default getUser = async (setHealth, setGems) => {
  const id = await AsyncStorage.getItem("user_id");
  const token = await AsyncStorage.getItem("token");

  return fetch(`${URL_NAME}/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token,
    },
  })
    .then((response) => {
      if (response.status === 422) {
        return "User not found";
      }
      return response.json();
    })
    .then((res) => {
      setHealth(res.user.health);
      AsyncStorage.setItem("appliance", res.user.others);
      setGems(res.user.currency);
    });
};
