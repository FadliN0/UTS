import { View, StyleSheet, Animated } from "react-native";
import { ButtonTabs } from "../components/ButtonTabs";
import React, { useState, useRef } from "react";
import { Info, Materi } from "../components/modules/detail";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { useEffect } from "react";
import { ToastAndroid } from "react-native";


const Detail = () => {
    const [activeTabs, setActiveTabs] = useState("info");
    const {id} = useLocalSearchParams();
    const [description, setDescription] = useState('')
    const indicatorPosition = useRef(new Animated.Value(0)).current;
    const handleTabPress = (tab: string, position: number) => {
        setActiveTabs(tab);
        Animated.spring(indicatorPosition, {
            toValue: position,
            useNativeDriver: false,
        }).start();
    };

    const onGetData = async () =>{
        axios.get(`https://e-learning-api-theta.vercel.app/api/kursus/${id}`)
        .then(response =>{
            (setDescription(response.data.data.deskripsi));
            if(response.data.data.content && response.data.data.content.length > 0){
                const topic = response.data.data.content.map((item:any, index:Number) =>{
                    return{
                        id:index.toString(),
                        title:item.type,
                        describe:item.type,
                    }
                });
            }
        }).catch((error)=>{
            const message = error?.message ||'Gagal mengambil data';

        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
        })
    }

  const UIActiveTabs = () => {
    if (activeTabs === "info") return <Info description={description}/>
    if (activeTabs === "materi") return <Materi/>
    return <Info description={description}/>
  }

  useEffect(() => {
    onGetData();
  }, [])

    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabContainer}>
                <ButtonTabs
                    title="Info"
                    isActive={activeTabs === "info"}
                    customeStyle={styles.tabButton}
                    onPress={() => handleTabPress("info", 0)}
                />
                <ButtonTabs
                    title="Materi"
                    isActive={activeTabs === "materi"}
                    customeStyle={styles.tabButton}
                    onPress={() => handleTabPress("materi", 1)}
                />
                {/* Indicator */}
                <Animated.View
                    style={[
                        styles.indicator,
                        {
                            left: indicatorPosition.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["5%", "55%"],
                            }),
                        },
                    ]}
                />
            </View>

            {/* Content */}
            <View style={styles.contentContainer}>
                {activeTabs === "info" ? <Info /> : <Materi />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        backgroundColor: "#fff",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
    },
    tabButton: {
        flex: 1,
        alignItems: "center",
        padding: 12,
    },
    indicator: {
        position: "absolute",
        bottom: 0,
        width: "40%",
        height: 3,
        backgroundColor: "#2754db",
        borderRadius: 2,
    },
    contentContainer: {
        flex: 1,
        padding: 20,
    },
});

export default Detail;
