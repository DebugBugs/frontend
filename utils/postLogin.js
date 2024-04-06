import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_NAME } from "../config";

export default postLogin = (username, password, setIncorrect) => {
  return fetch(`${URL_NAME}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    }),
  })
    .then((response) => {
      if (response.status === 422) {
        setIncorrect(true);
      }
      return response.json();
    })
    .then((data) => {
      AsyncStorage.setItem("username", JSON.stringify(data.user.username));
      AsyncStorage.setItem("user_id", data.user.id);
      AsyncStorage.setItem("token", data.token);
    });
};
