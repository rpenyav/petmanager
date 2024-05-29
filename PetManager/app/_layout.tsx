import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { getToken } from "@/services/authService";

export default function Layout() {
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

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right", // Usar animación de deslizamiento lateral
        gestureDirection: "horizontal",
      }}
    />
  );
}
