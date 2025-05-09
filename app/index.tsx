import { Text, StyleSheet, Image, Animated } from "react-native";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const splashTimer = () => {
    setTimeout(() => {
      router.replace("/Tabs");
    }, 3000);
  };

  useEffect(() => {
    splashTimer();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={["#6C63FF", "#5F9DF7", "#89CFF0"]} style={styles.container}>
      <Animated.View style={{ alignItems: "center", opacity: fadeAnim }}>
        {/* Logo atau Icon */}
        {/* <Image
          source={require("@/assets/icon.png")} // ganti dengan path logo jika ada
          style={styles.logo}
        /> */}

        {/* Judul */}
        <Text style={styles.textLogo}>E-Learning</Text>
        <Text style={styles.textSubLogo}>Belajar Semakin Mudah</Text>
        <Text style={styles.version}>Versi 4.0</Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    tintColor: "#fff", // jika gambar PNG monochrome
  },
  textLogo: {
    fontSize: 48,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  textSubLogo: {
    fontSize: 18,
    color: "white",
    letterSpacing: 1,
  },
  version: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 10,
  },
});
