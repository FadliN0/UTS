import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const courseMaterials = [
    { id: "1", title: "Pengenalan React Native", icon: "book" },
    { id: "2", title: "State & Props", icon: "storage" },
    { id: "3", title: "Navigasi dengan React Navigation", icon: "navigation" },
    { id: "4", title: "Menghubungkan API", icon: "cloud-download" },
];

export const Materi = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data={courseMaterials}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.materialItem}>
                        <MaterialIcons name={item.icon} size={24} color="#2754db" />
                        <Text style={styles.materialText}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    materialItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    materialText: {
        fontSize: 16,
        marginLeft: 10,
    },
})