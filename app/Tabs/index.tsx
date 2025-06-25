import { FlatList } from "react-native";
import { ToastAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setKursus} from '../../store/reducer/kursusSlice'
import { CourseCard } from "@/components/CourseCard";


export default function HomeScreen() {
  const dispatch = useDispatch();
  const kursusList = useSelector(state => state.kursus.data);
  const onGetData = async () =>{
      axios.get('https://e-learning-api-theta.vercel.app/api/kursus')
      .then(response =>{
      dispatch(setKursus(response.data.data))
      }).catch((error)=>{
      dispatch(setKursus([]));
      const message = error?.message ||'Gagal mengambil data';

      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      })
  }
  const onGoToDetail = (itemId:String) => {
        router.push(`/detail?id=${itemId}`);
    };

    const onStartCourse = () => {
        router.push('/course');
    };

  useEffect(() => {
    onGetData();
  }, [])

  return (
    <SafeAreaProvider>
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
// export default Home;
