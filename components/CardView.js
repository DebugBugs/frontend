import { View, Text, StyleSheet } from "react-native";

export default function CardView(props) {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{ display: "flex", gap: 10 }}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: "100%",
    height: "auto",
    borderRadius: 18,
    backgroundColor: "#E0F2F1",
    padding: 15,
    marginTop: 15,
  },
  title: {
    textAlign: "left",
    fontWeight: "900",
    fontSize: 20,
    marginBottom: 10,
  },
});
