import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Navigation</Text>
            <Text style={styles.category}>Mobile Development</Text>
            <Text style={styles.description}>
                Belajar dasar-dasar navigasi di React Native, termasuk Stack Navigator, Tab Navigator, dan Drawer Navigator.
            </Text>
            <Text style={styles.date}>📅 Maret 2025</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        margin: 20,
        alignItems: "center",
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    category:{
        fontSize: 14,
        color: "#888",
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
    },
    date:{
        fontSize: 14,
        fontStyle: "italic",
        color: "#555",
    }

})