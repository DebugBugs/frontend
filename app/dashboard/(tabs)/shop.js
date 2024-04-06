import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import Colors from "../../../utils/Colors";

// Each item card on the shop screen.
const ItemCard = ({ i, item }) => (
  <View key={i} style={styles.itemContainer}>
    <Image
      style={{ width: 60, height: 60, marginLeft: 25 }}
      source={require("../../../assets/coupon.jpeg")}
    ></Image>
    <View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text
        style={{ marginBottom: 5, fontSize: 8 }}
      >{`${item.price} coins`}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={createTwoButtonAlert}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const createTwoButtonAlert = () =>
  Alert.alert("Confirmation", "Are you sure you want to buy this product?", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const items = [
  { name: "50% Discount Fairprice Coupon", price: 50 },
  { name: "$10 Dollar Voucher Seoul Garden", price: 30 },
  { name: "Capita 30% off Coupon", price: 90 },
  { name: "$4 dollar voucher 8 degrees", price: 30 },
  { name: "50% Discount Fairprice Coupon", price: 50 },
  { name: "$10 Dollar Voucher Seoul Garden", price: 30 },
  { name: "Capita 30% off Coupon", price: 90 },
  { name: "$4 dollar voucher 8 degrees", price: 30 },
  { name: "50% Discount Fairprice Coupon", price: 50 },
  { name: "$10 Dollar Voucher Seoul Garden", price: 30 },
  { name: "Capita 30% off Coupon", price: 90 },
  { name: "$4 dollar voucher 8 degrees", price: 30 },
];

// The main shop screen component.
const Shop = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{ fontWeight: "800", color: Colors.SECONDARY, fontSize: 30 }}
      >
        Shop
      </Text>
      {items.map((item) => (
        <ItemCard item={item}></ItemCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemName: {
    marginBottom: 8,
    fontSize: 10,
    width: 170,
    // Add style for item name text.
  },

  buyButton: {
    backgroundColor: "turquoise",
    padding: 10,
    borderRadius: 5,
    width: "100",
  },
  buyButtonText: {
    color: "white",
    // Add style for buy button text.
  },
});

export default Shop;
