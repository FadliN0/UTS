import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const onGotToDetail = () => {
    router.push("/detail");
  };

  const onStartCourse = () => {
    router.push("/course");
  };

  const onStartComingSoonCourse = () => {
    // Tombol tidak akan berfungsi karena ini adalah kursus yang Coming Soon
  };

  return (
    <SafeAreaProvider>
      <LinearGradient colors={["#f0f4ff", "#dbe4ff"]} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 24 }}>
          <View style={styles.container}>
            {/* Kursus Expo for React */}
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png" }}
                style={styles.imageStyle}
              />
              <View style={styles.cardInfo}>
                <View style={styles.infoHeader}>
                  <Text style={styles.chip}>Mobile Developer</Text>
                  <Text style={styles.date}>Maret 2025</Text>
                </View>
                <Text style={styles.title}>Expo for React</Text>
                <Text style={styles.description}>
                  Bangun aplikasi React Native dengan cepat menggunakan Expo, dari pembuatan proyek hingga publish ke Play Store dan App Store.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onGotToDetail} style={styles.button}>
                    <LinearGradient colors={["#b388ff", "#7c4dff"]} style={styles.gradientButton}>
                      <Text style={styles.buttonText}>Preview</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onStartCourse} style={styles.button}>
                    <LinearGradient colors={["#1976d2", "#0d47a1"]} style={styles.gradientButton}>
                      <Text style={styles.buttonText}>Mulai</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.newLabel}>
                <Text style={styles.newText}>NEW</Text>
              </View>
            </View>

            {/* Kursus Coming Soon */}
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: "https://reactjs.org/logo-og.png" }}
                style={styles.imageStyle}
              />
              <View style={styles.cardInfo}>
                <View style={styles.infoHeader}>
                  <Text style={styles.chip}>Mobile Developer</Text>
                  <Text style={styles.date}>April 2025</Text>
                </View>
                <Text style={styles.title}>Coming Soon: Introduction to React Native</Text>
                <Text style={styles.description}>
                  Kursus ini akan segera hadir! Pelajari dasar-dasar pengembangan aplikasi dengan React Native.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={onGotToDetail} disabled style={[styles.button, styles.disabledButton]}>
                    <LinearGradient colors={["#ccc", "#ccc"]} style={styles.gradientButton}>
                      <Text style={[styles.buttonText, styles.disabledText]}>Preview</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onStartComingSoonCourse} disabled style={[styles.button, styles.disabledButton]}>
                    <LinearGradient colors={["#ccc", "#ccc"]} style={styles.gradientButton}>
                      <Text style={[styles.buttonText, styles.disabledText]}>Mulai</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
    position: "relative",
    marginBottom: 20,
  },
  imageStyle: {
    width: width * 0.28,
    height: width * 0.35,
    borderRadius: 12,
    shadowColor: "#000",  // Menambahkan shadow
    shadowOffset: { width: 0, height: 4 },  // Posisi shadow
    shadowOpacity: 0.1,  // Intensitas shadow
    shadowRadius: 6,  // Seberapa besar shadow
    elevation: 4,  // Elevasi untuk Android
  },
  cardInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  chip: {
    backgroundColor: "#e3f2fd",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "500",
    color: "#0d47a1",
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  gradientButton: {
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  newLabel: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#f44336",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  newText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.5,  // Membuat tombol transparan untuk menunjukkan tidak aktif
  },
  disabledText: {
    color: "#aaa",  // Mengubah warna teks menjadi abu-abu untuk tombol nonaktif
  },
});

export default Home;
