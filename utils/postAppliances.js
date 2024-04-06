import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_NAME } from "../config";
import getUsername from "./getUsername";

export default postApppliances = async (aircon, laundry, fridge, others) => {
  const id = await AsyncStorage.getItem("user_id");
  const token = await AsyncStorage.getItem("token");
  return fetch(`${URL_NAME}/users/${id}/appliances`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify({
      appliances: {
        aircon: aircon,
        laundry: laundry,
        fridge: fridge,
        others: others,
      },
    }),
  }).then((response) => {
    if (response.status === 422) {
      return "User not found";
    }
    return response.json();
  });
};
