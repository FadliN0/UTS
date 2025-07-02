import { FlatList, TextInput,StyleSheet, Button, View } from "react-native";
import { ToastAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setKursus} from '../../store/reducer/kursusSlice'
import { CourseCard } from "@/components/CourseCard";



export default function HomeScreen() {
  const dispatch = useDispatch();
  const kursusList = useSelector(state => state.kursus.data);
  const [searchQuery, setSearchQuery] = useState("");
  const onGetData = async () => {
    try {
        dispatch(setKursus([]));
        const params = {
            filter: searchQuery,
        };
        
        const response = await axios.get('https://e-learning-api-theta.vercel.app/api/kursus', 
            { params }
        );
        
        dispatch(setKursus(response.data.data));
    } catch (error) {
        dispatch(setKursus([]));
        const message = error?.message || 'Gagal mengambil data';
        
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }
}
  const onGoToDetail = (itemId:String) => {
        router.push(`/detail?id=${itemId}`);
    };

    const onStartCourse = (itemId:String) => {
        router.push(`/course?id=${itemId}`);
    };

  useEffect(() => {
    onGetData();
  }, [])

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Search..."
                    value={searchQuery} 
                    onChangeText={setSearchQuery}
                />
                <View style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        title="Submit"
                        onPress={()=>onGetData()}
                    />
                </View>
            </View>
      <FlatList 
                onRefresh={() => onGetData()}
                refreshing={false}
                data={kursusList}
                renderItem={({item}) => 
                  <CourseCard
                      onGoToDetail ={()=> onGoToDetail(item._id)}
                      onStartCourse = {onStartCourse}
                      category={item.category}
                      title={item.title}
                      deskription={item.deskripsi}
                      image={item.img_url}
                      tanggal={item.tgl}
                      />
                }
                keyExtractor={item => item._id}/>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
})
// export default Home;
