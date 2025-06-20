import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from "react-native";

interface CourseCardType{
    onGoToDetail?: (value:any) => void;
    onStartCourse?: (value:any) => void;
    title: String;
    deskription: String;
    category: String;
    tanggal: String;
    image: String;
}


export const CourseCard = (props: CourseCardType) => {
  const { width } = useWindowDimensions();
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

    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
              <Image    
                source={{ uri: String(props.image)}}
                style={styles.imageStyle}
              />
              <View style={styles.cardInfo}>
                <View style={styles.infoHeader}>
                  <Text style={styles.chip}>{props.category}</Text>
                  <Text style={styles.date}>{props.tanggal}</Text>
                </View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>
                  {props.deskription}
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={props.onGoToDetail} style={styles.button}>
                    <LinearGradient colors={["#b388ff", "#7c4dff"]} style={styles.gradientButton}>
                      <Text style={styles.buttonText}>Preview</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={props.onStartCourse} style={styles.button}>
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
            {/* <View style={styles.cardContainer}>
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
            </View>  */}
          </View>
    )
}
    