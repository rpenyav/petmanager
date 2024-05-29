import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={openDrawer} style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  button: {
    backgroundColor: "#0056b3",
    padding: 10,
    borderRadius: 5,
    width: 50, // Ajustar el ancho del botón
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Header;
