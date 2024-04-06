import { View, Text, StyleSheet} from 'react-native';

export default function CardView() {
  return (
    <View style={styles.cardView}>
        <Text style={styles.title}>PlaceHolder</Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  cardView: {
    // width:"auto",
    // height:"auto", 
    // borderRadius:18,
    // backgroundColor:'rgb(167, 217, 175)',
    // padding:15,
    
  },
  title: {
    // alignItems: 'left',
  },
});