import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const TOKEN_KEY = "token";

export const saveToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

export const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("Error removing token:", error);
  }
};

export const login = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await axios.post(
      "https://backend-tester-741806943268.herokuapp.com/auth/login",
      {
        email,
        password,
      }
    );
    const { access_token } = response.data;
    await saveToken(access_token);
    return access_token;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

export const register = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await axios.post(
      "https://backend-tester-741806943268.herokuapp.com/auth/register",
      {
        email,
        password,
      }
    );
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};
