import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_NAME } from "../config";

export default postSignup = (username, password, setUsernameTaken) => {
  return fetch(`${URL_NAME}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password.toString(),
      },
    }),
  })
    .then((res) => {
      if (res.status === 422) {
        setUsernameTaken(true);
      }
      return res.json();
    })
    .then((data) => {
      AsyncStorage.setItem("username", data.user.username);
      AsyncStorage.setItem("user_id", data.user.id.toString());
      AsyncStorage.setItem("token", data.token);
    });
};
