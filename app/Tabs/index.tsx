import { FlatList } from "react-native";
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
        console.log(error);
      })
  }
  const onGoToDetail = () => {
        router.push('/detail');
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
                      onGoToDetail ={onGoToDetail}
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
