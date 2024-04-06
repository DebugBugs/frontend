import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Each item card on the shop screen.
const ItemCard = ({ name }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemName}>{name}</Text>
    <TouchableOpacity style={styles.buyButton}>
      <Text style={styles.buyButtonText}>Buy Now</Text>
    </TouchableOpacity>
  </View>
);

// The main shop screen component.
const Shop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heartContainer}>
          <Text style={styles.heartText}>9999</Text>
          {/* Placeholder for heart icon */}
        </View>
        <View style={styles.energyBar}>
          <View style={styles.energyFill}></View>
          {/* Dynamic fill for energy bar */}
        </View>
        <View style={styles.badgePlaceholder}>
          {/* Placeholder for badge */}
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemCard name={item.name} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // Assuming a white background for the shop.
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  heartContainer: {
    // Define styles for the heart container if needed.
  },
  heartText: {
    // Define styles for the text next to the heart icon if needed.
  },
  energyBar: {
    flex: 1,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginHorizontal: 8,
  },
  energyFill: {
    width: "100%", // You should calculate this based on the current energy level.
    height: "100%",
    borderRadius: 10,
    backgroundColor: "red",
  },
  badgePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    marginBottom: 8,
    // Add style for item name text.
  },
  buyButton: {
    backgroundColor: "turquoise",
    padding: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    // Add style for buy button text.
  },
});

export default Shop;
