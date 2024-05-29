import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { getToken, removeToken } from "@/services/authService";
import Header from "../layouts/header";

const HomeScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (!token) {
        router.replace("/auth/login");
      }
    };
    checkToken();
  }, []);

  const handleLogout = async () => {
    await removeToken();
    router.replace("/auth/login");
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Home</Text>
      {/* <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default HomeScreen;
