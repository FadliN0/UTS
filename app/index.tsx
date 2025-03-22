import { Text,StyleSheet } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import { LinearGradient} from "expo-linear-gradient";

export default function Index() {
    const spalshTimer = () => {
        setTimeout(() => {
            router.replace("/home")
        },3000)
    }

    useEffect(() =>{
        spalshTimer()
    })

    return (
        <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}
        >
                <Text style={styles.textlogo}>Elearning</Text>
                <Text style={styles.textSublogo}>Belajar Semakin Mudah</Text>
        </LinearGradient>
        
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textlogo: {
            fontSize: 90,
            color: 'white',
            fontWeight:700,
        },
        textSublogo:{
            color: 'white',
        }
    });

