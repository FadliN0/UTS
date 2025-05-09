import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const courses = [
    {
        title: "Pengenalan Expo",
        icon: "infocirlceo",
        subTopics: [
            { title: "Apa itu Expo?", icon: "questioncircleo" },
            { title: "Kelebihan dan kekurangan Expo", icon: "pluscircleo" },
            { title: "Perbedaan Managed & Bare Workflow", icon: "swap" },
        ],
    },
    {
        title: "Membuat Proyek Expo",
        icon: "folderopen",
        subTopics: [
            { title: "Instalasi Expo CLI", icon: "tool" },
            { title: "Membuat project pertama", icon: "fileadd1" },
            { title: "Menjalankan project dengan Expo Go", icon: "mobile1" },
        ],
    },
    {
        title: "Menggunakan Expo SDK",
        icon: "appstore1",
        subTopics: [
            { title: "Kamera & Media", icon: "camerao" },
            { title: "Lokasi & Maps", icon: "enviromento" },
            { title: "Notifikasi Push", icon: "notification" },
        ],
    },
    {
        title: "Build dan Publish",
        icon: "upload",
        subTopics: [
            { title: "Build untuk Android & iOS", icon: "rocket1" },
            { title: "Publish ke Google Play Store", icon: "google" },
            { title: "Publish ke Apple App Store", icon: "apple1" },
        ],
    },
];

export const Materi = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <View style={styles.container}>
            {courses.map((course, index) => (
                <View key={index} style={styles.card}>
                    <TouchableOpacity
                        style={styles.header}
                        onPress={() => toggleAccordion(index)}
                    >
                        <View style={styles.headerLeft}>
                            <AntDesign name={course.icon as any} size={20} color="#2754db" />
                            <Text style={styles.title}>{course.title}</Text>
                        </View>
                        <AntDesign
                            name={activeIndex === index ? "up" : "down"}
                            size={18}
                            color="#555"
                        />
                    </TouchableOpacity>

                    {activeIndex === index && course.subTopics.length > 0 && (
                        <View style={styles.subTopics}>
                            {course.subTopics.map((sub, idx) => (
                                <View key={idx} style={styles.subItem}>
                                    <AntDesign name={sub.icon as any} size={16} color="#555" />
                                    <Text style={styles.subTitle}>{sub.title}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        elevation: 2,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 10,
        color: "#333",
    },
    subTopics: {
        paddingLeft: 40,
        paddingBottom: 10,
    },
    subItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
    },
    subTitle: {
        fontSize: 14,
        marginLeft: 10,
        color: "#555",
    },
});
