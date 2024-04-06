import { URL_NAME } from "../config";

export default postSignup = (username, password) => {
  return fetch(`${URL_NAME}/users`, {
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
    .then((res) => {
      if (res.status === 422) {
        return "Username already taken";
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("username", data.user.username);
      localStorea.setItem("token", data.token);
    });
};
