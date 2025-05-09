import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Info = () => {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.header}>📱 Expo for React Native</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🎯 Apa yang Akan Saya Pelajari?</Text>
                    <Text style={styles.listItem}>• Dasar-dasar penggunaan Expo</Text>
                    <Text style={styles.listItem}>• Membuat proyek dengan Expo CLI</Text>
                    <Text style={styles.listItem}>• Managed vs Bare Workflow</Text>
                    <Text style={styles.listItem}>• Pemanfaatan Expo SDK: Kamera, Lokasi, Notifikasi, dll</Text>
                    <Text style={styles.listItem}>• Build dan publish aplikasi ke Google Play & App Store</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>👥 Siapa yang Cocok Mengikuti?</Text>
                    <Text style={styles.listItem}>• Pemula yang ingin cepat membuat app</Text>
                    <Text style={styles.listItem}>• Web developer yang ingin terjun ke mobile</Text>
                    <Text style={styles.listItem}>• Siapa saja yang ingin membuat app tanpa repot setup native</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>✨ Keuntungan Belajar Expo</Text>
                    <Text style={styles.listItem}>• 🚀 Tanpa setup Xcode/Android Studio</Text>
                    <Text style={styles.listItem}>• ⚡ Live Reload cepat</Text>
                    <Text style={styles.listItem}>• 📱 Test langsung di device pakai Expo Go</Text>
                    <Text style={styles.listItem}>• 🌍 Komunitas luas & dokumentasi lengkap</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>💼 Estimasi Gaji</Text>
                    <Text style={styles.salary}>💰 $70,000 - $100,000 / tahun</Text>
                    <Text style={styles.note}>(Tergantung pengalaman & lokasi kerja)</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        paddingBottom: 30,
    },
    container: {
        padding: 20,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        margin: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 4,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2754db",
        textAlign: "center",
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    listItem: {
        fontSize: 16,
        color: "#555",
        marginLeft: 10,
        marginBottom: 6,
    },
    salary: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#27ae60",
    },
    note: {
        fontSize: 14,
        color: "#888",
        marginTop: 4,
    },
});
