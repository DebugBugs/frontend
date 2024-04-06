import { URL_NAME } from "../config";

export default postApppliances = (
  username,
  aircon,
  laundry,
  fridge,
  others
) => {
  return fetch(`${URL_NAME}/apppliances`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: username,
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
