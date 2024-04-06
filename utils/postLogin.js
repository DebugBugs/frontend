import { URL_NAME } from "../config";

export default postLogin = (username, password) => {
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
        return "Password incorrect";
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("token", data.token);
    });
};
