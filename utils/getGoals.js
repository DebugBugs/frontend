import AsyncStorage from "@react-native-async-storage/async-storage";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export default getGoals = async () => {
  const appliance = await AsyncStorage.getItem("appliance");
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a sustainability expert. You are given data on what appliances the user. Give 3 goals to the user to accomplish
    to encourage them to conserve energy. each goal should be in one sentence, max 10 words. Return in array format`,
      },
      { role: "user", content: appliance },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(JSON.parse(completion.choices[0].message.content));
};
