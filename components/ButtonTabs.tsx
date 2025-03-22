import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonTabsType {
    onPress(): void;
    title: string;
    isActive: boolean;
    customeStyle?: any;
}

export const ButtonTabs = (props: ButtonTabsType) => {
    return (
        <TouchableOpacity
            style={[styles.button, props.customeStyle, props.isActive ? styles.buttonActive : styles.buttonInactive]}
            onPress={props.onPress}
            activeOpacity={0.7} // Memberikan efek klik lebih halus
        >
            <Text style={props.isActive ? styles.textActive : styles.textInactive}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 12,
        alignItems: "center",
        // justifyContent: "center",
    },
    buttonActive: {
        // borderBottomWidth: 3,
        borderBottomColor: "#2754db",
    },
    buttonInactive: {
        // borderBottomWidth: 2,
        borderBottomColor: "#ddd",
    },
    textActive: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#2754db",
    },
    textInactive: {
        fontSize: 16,
        fontWeight: "500",
        color: "#888",
    },
});
