import {View} from "react-native"
import CardView from "../../components/CardView";
import HealthContainer from "../../components/HealthContainer";
import GemContainer from "../../components/GemContainer";


const Home = () => {
  return (
    <View>
      <CardView></CardView>
      <HealthContainer Health={50}></HealthContainer>
      <GemContainer Gems={100}></GemContainer>

    </View>
  );
};

export default Home;
